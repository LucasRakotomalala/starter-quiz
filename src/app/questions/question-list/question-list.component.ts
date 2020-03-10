import { Component, OnInit } from '@angular/core';
import { Question } from '../../../models/question.model';
import { QuestionService } from '../../../services/question.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

  public questionList: Question[] = this.questionService.setQuestionsFromQuizzesUrl();

  constructor(public questionService: QuestionService) {
    this.questionService.questions$.subscribe((question) => this.questionList = question);
  }

  ngOnInit() {
  }

  deleteQuestion(selected: Question) {
    this.questionService.deleteQuestion(selected);
  }
}
