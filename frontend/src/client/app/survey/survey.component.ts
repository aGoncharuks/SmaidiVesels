import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { SurveyService } from './survey.service';
import { Question } from './interfaces/survey';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { MatExpansionPanel } from '@angular/material';

/**
 * This class represents the lazy loaded SurveyComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'app-survey',
  templateUrl: 'survey.component.html',
  styleUrls: ['survey.component.css'],
})

export class SurveyComponent implements OnInit {

  @ViewChildren(MatExpansionPanel) panels: QueryList<MatExpansionPanel>;

  public questions: Question[][];
  public answerForm: FormArray;

  constructor(
    private surveyService: SurveyService,
    private formBuilder: FormBuilder
  ) {}


  ngOnInit() {
    /**
     * Get all questions
     */
    this.surveyService.getQuestions()
      .subscribe((next: Question[][]) => {

        this.questions = next;

        /**
         * Create form array of question blocks
         * Each question block contains form array of answers initially set to null
         */
        let questionBlockArray: FormArray[] = this.questions.map((questionBlock: Question[]) => {
          return this.formBuilder.array(
            questionBlock.map((question: Question) => [null, Validators.required])
          );
        });
        this.answerForm = this.formBuilder.array(questionBlockArray);
      });
  }

  /**
   * Send answers to server
   */
  public submitAnswers(): void {
    this.surveyService.saveAnswers(this.answerForm.value)
      .subscribe();
  }

  /**
   * When Next button clicked => check if last question in question block, if true =>
   * - close current question block panel
   * - open next question block panel if one exists
   * @param questionBlockIndex
   * @param questionIndex
   */
  public onNextClick(questionBlockIndex: number, questionIndex: number): void {
    if(questionIndex === this.questions[questionBlockIndex].length - 1) {
      this.panels.find((panel, index) => index === questionBlockIndex).close();
      if(questionBlockIndex !== this.panels.length - 1) {
        this.panels.find((panel, index) => index === questionBlockIndex + 1).open();
      }
    }
  }

}
