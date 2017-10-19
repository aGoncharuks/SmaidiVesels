import { NgModule } from '@angular/core';
import { SurveyComponent } from './survey.component';
import { SurveyRoutingModule } from './survey-routing.module';
import { MaterialModule } from '../shared/material.module';
import { SurveyService } from './survey.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [SurveyRoutingModule, MaterialModule, FormsModule, CommonModule],
  declarations: [SurveyComponent],
  exports: [SurveyComponent],
  providers: [SurveyService]
})
export class SurveyModule { }
