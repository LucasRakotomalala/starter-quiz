import { Question } from './question.model';

export enum theme {
  Actor = 'Acteurs',
  Sport = 'Sports',
  Animals = 'Animaux'
}

export interface Quiz {
    name: string;
    theme?: theme;
    date?: Date;
    questions: Question[];
    id: string;
}
