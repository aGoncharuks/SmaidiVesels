import { Component, OnInit } from '@angular/core';
import { SurveyService } from './survey.service';
import { Question } from './interfaces/survey';

/**
 * This class represents the lazy loaded SurveyComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'survey.component.html',
  styleUrls: ['survey.component.css'],
})
export class SurveyComponent implements OnInit {

  public answer: number;

  public questions: Question[][];

  constructor(private surveyService: SurveyService) {}

  /**
   * Get all questions
   */
  ngOnInit() {
    this.questions = this.surveyService.getQuestions();
  }

}
