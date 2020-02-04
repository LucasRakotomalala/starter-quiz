import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {Question} from '../../../models/question.model';
import {QuestionService} from '../../../services/question.service';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {
  private questionForm: FormGroup;

  constructor(public formBuilder: FormBuilder, public questionService: QuestionService) {
    this.initializeQuestionForm();
  }

  ngOnInit() {
  }

  private initializeQuestionForm() {
    this.questionForm = this.formBuilder.group({
      label: [''],
      answers: this.formBuilder.array([])
    });
  }

  get answers() {
    return this.questionForm.get('answers') as FormArray;
  }

  addAnswer() {
    this.answers.push(this.createAnswer());
  }

  private createAnswer() {
    return this.formBuilder.group({
      value: '',
      isCorrect: false,
    });
  }
  private createQuestion() {
    const questionToCreate: Question = this.questionForm.getRawValue() as Question;
    if (this.questionForm.valid) {
      console.log('Adding question ..');

      // Now, add your quiz in the list!
      this.questionService.addQuestion(questionToCreate);
    }
  }
}
