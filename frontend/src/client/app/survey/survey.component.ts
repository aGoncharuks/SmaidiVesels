import { ChangeDetectorRef, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { SurveyService } from './survey.service';
import { Question, Student } from './interfaces/survey';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MatExpansionPanel } from '@angular/material';
import { Router } from '@angular/router';
import { LoginComponent } from '../shared/login/login.component';
import { PopupComponent } from './popup/popup.component';

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
  public student: Student = null;

  private loginDialog: MatDialogRef<LoginComponent>;
  private popupDialog: MatDialogRef<PopupComponent>;

  constructor(
    private surveyService: SurveyService,
    private formBuilder: FormBuilder,
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router,
    private dialog: MatDialog
  ) {}


  ngOnInit() {

    /**
     * Call dialog opening with zero timeout because of:
     * https://github.com/angular/angular/issues/15634
     */
    setTimeout(() => {
        this.loginDialog = this.dialog.open(LoginComponent, {
          height: '400px',
          width: '600px',
          disableClose: true
        });

        /**
         * Subscribe to dialog closing to set student data on close
         */
        this.loginDialog.afterClosed().subscribe(result => {
          this.student = result;
          this.createSurveyForm();
        });
      },
    0);
  }

  /**
   * Send answers to server
   */
  public submitAnswers(): void {
    this.surveyService.saveAnswers(this.student, this.answerForm.value)
      .subscribe();

    let contentId = this.surveyService.getStudyContentId(this.answerForm.value[0]);
    this.showSurveyEndPopup(contentId);
  }

  /**
   * Show survey end informative popup
   * @param contentId
   */
  public showSurveyEndPopup(contentId: number): void {
    this.popupDialog = this.dialog.open(PopupComponent, {
      height: '250px',
      width: '600px',
      disableClose: true
    });

    /**
     * Subscribe to dialog closing to navigate to study page on close with content id passed as route parameter
     */
    this.popupDialog.afterClosed().subscribe(() => {
      this.router.navigate(['/study', contentId]);
    });

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

  /**
   * Get all questions and create survey form
   */
  private createSurveyForm() {
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

        this.changeDetectorRef.detectChanges();
        this.panels.find((panel, index) => index === 0).open();
      });
  }

}
