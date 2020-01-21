import { Question } from './question.model';

export enum theme {
  Actor = 'Actor',
  Sport = 'Sport',
  Test = 'Test'
}

export interface Quiz {
    name: string;
    theme?: theme;
    creationDate?: Date;
    questions: Question[];
}
