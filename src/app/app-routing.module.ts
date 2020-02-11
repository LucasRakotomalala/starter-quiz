import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QuizListComponent } from './quizzes/quiz-list/quiz-list.component';
import { EditQuizComponent } from './quizzes/edit-quiz/edit-quiz.component';
import {CreateUserComponent} from './users/create-user/create-user.component';

const routes: Routes = [
  { path: '', redirectTo: '/quiz-list', pathMatch: 'full' },
  { path: 'quiz-list', component: QuizListComponent },
  { path: 'edit-quiz', component: EditQuizComponent },
  { path: 'edit-quiz/:id', component: EditQuizComponent },
  { path: 'create-user', component: CreateUserComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
