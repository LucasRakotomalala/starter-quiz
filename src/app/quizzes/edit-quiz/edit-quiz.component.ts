import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../../../services/quiz.service';
import { Quiz } from '../../../models/quiz.model';

@Component({
  selector: 'app-edit-quiz',
  templateUrl: './edit-quiz.component.html',
  styleUrls: ['./edit-quiz.component.scss']
})
export class EditQuizComponent implements OnInit {

  @Input()
  quiz: Quiz;

  constructor(private route: ActivatedRoute, private quizService: QuizService) {
  }

  ngOnInit() {
    this.getQuiz();
  }

  private getQuiz() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.quizService.getQuiz(id)
      .subscribe(quiz => this.quiz = quiz);
  }
}
