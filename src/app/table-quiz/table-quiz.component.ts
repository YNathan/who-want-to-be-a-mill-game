import { Component, OnInit, Pipe, PipeTransform, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'

@Component({
  selector: 'app-table-quiz',
  templateUrl: './table-quiz.component.html',
  styleUrls: ['./table-quiz.component.css']
})
export class TableQuizComponent implements OnInit {
  @Input() question: any;
  @Input() questionNumber: number;
  @Output() emitNextQuestion: EventEmitter<any> = new EventEmitter<any>();

  currentQuestionIdx = 0;
  questions: any[];
  optionsQuiz = [];
  clickedOption: String;
  optionClicked = false;
  ansewerdGood = false;
  bottomTableButtonText = "ok";
  submitFormClicked = false;

  constructor() {
  }
  ngOnInit() {
    this.getOptionsArray(this.question);
  }

  shuffleOptionsArray() {
    var j, x, i;
    for (i = this.optionsQuiz.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = this.optionsQuiz[i];
      this.optionsQuiz[i] = this.optionsQuiz[j];
      this.optionsQuiz[j] = x;
    }
  }
  getOptionsArray(question) {
    this.optionsQuiz = question.incorrect_answers;
    this.optionsQuiz.push(question.correct_answer);
    this.shuffleOptionsArray();
  }
  onOptionClicked(option) {
    this.bottomTableButtonText = "ok";
    this.submitFormClicked = false;
    this.optionClicked = true;
    this.clickedOption = option;
  }
  onSubmitClicked() {

    // instead of creating a validator 
    if(this.optionClicked){
      if (this.bottomTableButtonText === 'ok') {
        this.submitFormClicked = true;
        if (this.clickedOption === this.question.correct_answer) {
          this.ansewerdGood = true;
        } else {
          this.ansewerdGood = false;
        }
        this.bottomTableButtonText = 'continue';
      } else {
        this.emitNextQuestion.emit({ 'questionNumber': this.questionNumber, 'isCorrect': this.ansewerdGood });
      }
    }
  }

}

