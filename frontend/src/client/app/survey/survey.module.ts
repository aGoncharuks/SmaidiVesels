import { NgModule } from '@angular/core';
import { SurveyComponent } from './survey.component';
import { SurveyRoutingModule } from './survey-routing.module';
import { MaterialModule } from '../shared/material.module';
import { SurveyService } from './survey.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../shared/login/login.component';
import { LoginService } from '../shared/login/login.service';
import { PopupComponent } from './popup/popup.component';

@NgModule({
  imports: [SurveyRoutingModule,
    MaterialModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule],
  declarations: [SurveyComponent, LoginComponent, PopupComponent],
  entryComponents: [LoginComponent, PopupComponent],
  exports: [SurveyComponent],
  providers: [SurveyService, LoginService]
})
export class SurveyModule { }
