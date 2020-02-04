import { Injectable } from '@angular/core';
import {BehaviorSubject, of} from 'rxjs';
import { Quiz } from '../models/quiz.model';
import { QUIZ_LIST } from '../mocks/quiz-list.mock';
import { HttpClient } from '@angular/common/http';

interface QuizFromJson {
  quizzes: Quiz[];
}

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
  private quizzes: Quiz[] = QUIZ_LIST;
  private quizzesUrl = 'https://api.myjson.com/bins/13ajhy';

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
  }

  deleteQuiz(quiz: Quiz) {
    this.quizzes = this.quizzes.filter(obj => obj !== quiz);
    this.quizzes$.next(this.quizzes);
  }

  setQuizzesFromUrl(): Quiz[] {
    this.httpClient.get(this.quizzesUrl).subscribe((quizFromJson: QuizFromJson) => {
      this.quizzes = quizFromJson.quizzes;
      this.quizzes$.next(this.quizzes);
    });
    return this.quizzes;
  }

  getQuiz(id: number) {
    return of(QUIZ_LIST.find(quiz => +quiz.id === id));
  }
}
