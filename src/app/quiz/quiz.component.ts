import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceService } from '../-service.service';
import { first } from 'rxjs/operators';
import { MatStepper } from '@angular/material/stepper';
import { Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  @ViewChild('stepper') stepper: MatStepper;
  category : String;
  questions: any[];
  currentQuestionIdx = 0;

  constructor(private service: ServiceService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
     this.route.queryParams.pipe(first()).subscribe(x => {
      this.category =  x.category;
      if(this.category === 'all'){
          this.service.getQuiz().pipe(first()).subscribe(data => {
            this.questions = data['results'];
          });
        
      }else{
        this.questions = this.service.getStoredQuiz().filter(x=>x.category == this.category);
        this.questions.sort(function(a, b) {
          if(a.difficulty === 'easy'){
            return a;
          }else if(a.difficulty === 'medium' && b.difficulty === 'easy'){
            return b;
          }else if(a.difficulty === 'medium' && b.difficulty === 'medium'){
            return a;
          }else if(a.difficulty === 'medium' && b.difficulty === 'hard'){
            return a;
          } else if(a.difficulty === 'hard' && (b.difficulty === 'medium' || b.difficulty === 'easy')){
            return b;
          }
        });
      }
    });
  }

  quizScoreResults = {};
  nextQuestion(evt, stepper: MatStepper) {
    console.log(evt);
    this.quizScoreResults[parseInt(evt.questionNumber)] = evt.isCorrect;
    if (evt.questionNumber < this.questions.length - 1) {
      stepper.next();
    } else {
      this.quizScoreResults;
      
      this.router.navigate(["quiz-results"], { queryParams: { page: JSON.stringify(this.quizScoreResults),category: JSON.stringify(this.category) } }).then(e=>{
        if(e){
          console.log("navigate success");
        }else{
          console.log("navigate faild");
        }
      });
    }
  } 

  move(index: number) {
    if( (this.quizScoreResults[index -1] !== undefined) || index=== 0){
      this.stepper.selectedIndex = index;
    }
  }


}
