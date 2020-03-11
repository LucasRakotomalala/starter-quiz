import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { Quiz } from '../models/quiz.model';
import { HttpClient } from '@angular/common/http';

import {httpOptions, urlQuizzes, urlUsers} from './const';

@Injectable({
  providedIn: 'root'
})

export class QuizService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  /**
   * The list of quiz.
   * The list is retrieved from the mock.
   */
  private quizzes: Quiz[] = [];
  private quizzesUrlTD = 'https://api.myjson.com/bins/13ajhy';

  /**
   * Observable which contains the list of the quiz.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public quizzes$: BehaviorSubject<Quiz[]> = new BehaviorSubject(this.quizzes);

  constructor(private httpClient: HttpClient) {
  }

  addQuiz(quiz: Quiz) {
    // You need here to update the list of quiz and then update our observable (Subject) with the new list
    // More info: https://angular.io/tutorial/toh-pt6#the-searchterms-rxjs-subject
    this.quizzes.push(quiz);
    this.quizzes$.next(this.quizzes);
    return this.httpClient.post<Quiz>(urlQuizzes, quiz, httpOptions).subscribe();
  }

  deleteQuiz(quiz: Quiz) {
    this.quizzes = this.quizzes.filter(obj => obj !== quiz);
    this.quizzes$.next(this.quizzes);
    return this.httpClient.delete(urlQuizzes + quiz.id, httpOptions).subscribe();
  }

  setQuizzesFromUrl(): Quiz[] {
    /* this.httpClient.get<{quizzes: Quiz[]}>(this.quizzesUrlTD).subscribe((quizzes) => {
      // quizzes.quizzes.forEach(quiz => this.quizzes.push(quiz));
      // this.quizzes = quizzes.quizzes;
      this.quizzes$.next(this.quizzes);
      return this.quizzes;
    }); */
    this.httpClient.get<Quiz[]>(urlQuizzes).subscribe((quizzes) => {
      // quizzes.forEach(quiz => this.quizzes.push(quiz));
      this.quizzes = quizzes;
      this.quizzes$.next(this.quizzes);
      return this.quizzes;
    });
    return this.quizzes;
  }

  getQuiz(id: number) {
    return of(this.quizzes.find(quiz => +quiz.id === id));
  }
}
