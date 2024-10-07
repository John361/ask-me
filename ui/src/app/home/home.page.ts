import {Component, inject, OnInit} from '@angular/core';
import {AnswerService} from "./answer";
import {QuestionService} from "./question";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  private answerService = inject(AnswerService);
  private questionService = inject(QuestionService);

  constructor() {}

  ngOnInit(): void {
    this.answerService.create();
    this.questionService.create();
  }
}
