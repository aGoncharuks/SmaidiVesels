import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SurveyComponent } from './survey.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: SurveyComponent }
    ])
  ],
  exports: [RouterModule]
})
export class SurveyRoutingModule { }
