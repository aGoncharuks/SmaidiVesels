import { NgModule } from '@angular/core';
import { SurveyComponent } from './survey.component';
import { SurveyRoutingModule } from './survey-routing.module';
import { MaterialModule } from '../shared/material.module';
import { SurveyService } from './survey.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [SurveyRoutingModule,
    MaterialModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule],
  declarations: [SurveyComponent],
  exports: [SurveyComponent],
  providers: [SurveyService]
})
export class SurveyModule { }
