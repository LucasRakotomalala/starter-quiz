import { Injectable } from '@angular/core';
import { Question } from '../models/question.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private questions: Question[] = [];

  public questions$: BehaviorSubject<Question[]> = new BehaviorSubject(this.questions);

  constructor() {
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
}
