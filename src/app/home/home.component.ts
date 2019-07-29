import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../-service.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories = [];
  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.service.getAllQuiz().pipe(first()).subscribe(data => {
      this.service.storeGlobalQuiz(data['results']);
      this.categories = this.getCategories(this.service.getStoredQuiz());
      this.categories = this.categories.filter((v, i, a) => a.indexOf(v) === i);
      this.categories.sort();
    });
  }

  getCategories(questionsArr){
    return questionsArr.map(x => x.category);
  }

}
