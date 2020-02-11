import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [];

  public users$: BehaviorSubject<User[]> = new BehaviorSubject(this.users);

  constructor() {
  }

  deleteUser(user: User) {
    this.users = this.users.filter(obj => obj !== user);
    this.users$.next(this.users);
  }

  addUser(user: User) {
    // You need here to update the list of quiz and then update our observable (Subject) with the new list
    // More info: https://angular.io/tutorial/toh-pt6#the-searchterms-rxjs-subject
    this.users.push(user);
    this.users$.next(this.users);
  }
}
