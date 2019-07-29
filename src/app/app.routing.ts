import { Routes, RouterModule } from '@angular/router';
import { QuizResultsComponent } from './quiz-results/quiz-results.component';
import { QuizComponent } from './quiz/quiz.component';
import { HomeComponent } from './home/home.component';



const appRoutes: Routes = [
    { path: 'home', component: HomeComponent }, 
    { path: 'quiz', component: QuizComponent }, 
    { path: 'quiz-results', component: QuizResultsComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: 'home' }
];

export const routing = RouterModule.forRoot(appRoutes,{onSameUrlNavigation: 'reload' });