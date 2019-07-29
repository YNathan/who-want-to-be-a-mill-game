import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  
  Quiz: any[];

  getAllQuiz() {
    return this.http.get<any[]>(`${environment.apiAllUrl}`);
  }
  getQuiz() {
    return this.http.get<any[]>(`${environment.apiUrl}`);
  }

  storeGlobalQuiz(quiz){
    this.Quiz = quiz;
  }
  getStoredQuiz(){
    return this.Quiz;
  }
}
