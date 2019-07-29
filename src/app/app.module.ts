import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing }        from './app.routing';
import { AppComponent } from './app.component';
import { TableQuizComponent } from './table-quiz/table-quiz.component';
import { UpperBannerComponent } from './upper-banner/upper-banner.component';
import { BottomBannerComponent } from './bottom-banner/bottom-banner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { QuizComponent } from './quiz/quiz.component';
import { SafeHtmlPipe } from './safe-html.pipe';
import { QuizResultsComponent } from './quiz-results/quiz-results.component';
import { HomeComponent } from './home/home.component';
import { AppMaterialModule } from './app-material/app-material.module';

@NgModule({
  declarations: [
    AppComponent,
    TableQuizComponent,
    UpperBannerComponent,
    BottomBannerComponent,
    QuizComponent,
    SafeHtmlPipe,
    QuizResultsComponent,
    HomeComponent
  ],
  imports: [
    routing,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    
    // Materials Modules
    AppMaterialModule
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
