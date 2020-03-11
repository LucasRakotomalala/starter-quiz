import { HttpHeaders } from '@angular/common/http';

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

export const urlQuizzes = 'http://localhost:9428/api/quizzes/';

export const urlUsers = 'http://localhost:9428/api/users/';
