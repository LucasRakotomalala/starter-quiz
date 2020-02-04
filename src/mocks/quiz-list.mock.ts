import { Quiz, theme } from '../models/quiz.model';
import { Question } from '../models/question.model';


export const QUESTION_ACTOR: Question = {
    label: 'Jean Gabin a joué dans...',
    answers: [
        {
            value: 'Les tuches II',
            isCorrect: false,
        },
        {
            value: 'La grande illusion',
            isCorrect: true,
        },
    ]
};

export const QUIZ_LIST: Quiz[] = [
    {
        name: 'Les Acteurs',
        theme: theme.Actor,
        questions: [QUESTION_ACTOR],
        id: '1',
    },
    {
        name: 'Les Sports',
        theme: theme.Sport,
        questions: [],
        id: '2',
    }
];
