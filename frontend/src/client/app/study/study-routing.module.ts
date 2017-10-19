import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StudyComponent } from './study.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'about', component: StudyComponent }
    ])
  ],
  exports: [RouterModule]
})
export class StudyRoutingModule { }
