import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-quiz-results',
  templateUrl: './quiz-results.component.html',
  styleUrls: ['./quiz-results.component.css']
})
export class QuizResultsComponent implements OnInit {
  category : String;
  scorsResults = [];
  successCounter = 0;
  percentageSuccess = 0;
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.pipe(first()).subscribe(x => {
      this.category = JSON.parse(x['category']);
      this.scorsResults = JSON.parse(x['page']);

      for (let i in this.scorsResults) {
        if (this.scorsResults[i]) {
          this.successCounter++;
        }
      }
      if (this.successCounter > 0) {
        this.percentageSuccess = Math.round((this.successCounter * 100) / Object.keys(this.scorsResults).length);
      }
    });

    this.route.queryParams.pipe().subscribe(x => {


      
    });
  }

}
