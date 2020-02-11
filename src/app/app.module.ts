import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuizListComponent } from './quizzes/quiz-list/quiz-list.component';
import { QuizComponent } from './quizzes/quiz/quiz.component';
import { HeaderComponent } from './header/header.component';
import { QuizFormComponent } from './quizzes/quiz-form/quiz-form.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { EditQuizComponent } from './quizzes/edit-quiz/edit-quiz.component';
import { QuestionFormComponent } from './questions/question-form/question-form.component';
import { QuestionListComponent } from './questions/question-list/question-list.component';
import { QuestionComponent } from './questions/question/question.component';
import { UserComponent } from './users/user/user.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { UserFormComponent } from './users/user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizListComponent,
    QuizComponent,
    HeaderComponent,
    QuizFormComponent,
    EditQuizComponent,
    QuestionFormComponent,
    QuestionListComponent,
    QuestionComponent,
    UserComponent,
    UserListComponent,
    CreateUserComponent,
    UserFormComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
