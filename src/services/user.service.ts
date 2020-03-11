import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { BehaviorSubject } from 'rxjs';
import {Quiz} from '../models/quiz.model';
import {httpOptions, urlQuizzes, urlUsers} from './const';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [];

  public users$: BehaviorSubject<User[]> = new BehaviorSubject(this.users);

  constructor(private httpClient: HttpClient) {
  }

  deleteUser(user: User) {
    this.users = this.users.filter(obj => obj !== user);
    this.users$.next(this.users);
    return this.httpClient.delete(urlUsers + user.id, httpOptions).subscribe();
  }

  addUser(user: User) {
    // You need here to update the list of quiz and then update our observable (Subject) with the new list
    // More info: https://angular.io/tutorial/toh-pt6#the-searchterms-rxjs-subject
    this.users.push(user);
    this.users$.next(this.users);
    return this.httpClient.post<Quiz>(urlUsers, user, httpOptions).subscribe();
  }

  setUsersFromUrl(): User[] {
    this.httpClient.get<User[]>(urlUsers).subscribe((users) => {
      this.users = users;
      this.users$.next(this.users);
      return this.users;
    });
    return this.users;
  }
}
