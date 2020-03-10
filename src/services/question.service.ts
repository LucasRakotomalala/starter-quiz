import { Injectable } from '@angular/core';
import { Question } from '../models/question.model';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { QuizService } from './quiz.service';
import { Quiz } from '../models/quiz.model';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private questions: Question[] = [];

  public questions$: BehaviorSubject<Question[]> = new BehaviorSubject(this.questions);

  constructor(private httpClient: HttpClient, private quizService: QuizService, private route: ActivatedRoute) {
  }

  deleteQuestion(question: Question) {
    this.questions = this.questions.filter(obj => obj !== question);
    this.questions$.next(this.questions);
  }

  addQuestion(question: Question) {
    // You need here to update the list of quiz and then update our observable (Subject) with the new list
    // More info: https://angular.io/tutorial/toh-pt6#the-searchterms-rxjs-subject
    this.questions.push(question);
    this.questions$.next(this.questions);
  }

  setQuestionsFromQuizzesUrl(): Question[] {
    this.httpClient.get<Quiz[]>(this.quizService.quizzesUrlLocal).subscribe((quizzes) => {
      for (const quiz of quizzes) {
        if (+quiz.id === +this.route.snapshot.firstChild.params.id) {
          this.questions = quiz.questions;
        }
      }
      this.questions$.next(this.questions);
      return this.questions;
    });
    return this.questions;
  }
}
