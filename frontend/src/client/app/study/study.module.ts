import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudyComponent } from './study.component';
import { StudyRoutingModule } from './study-routing.module';

@NgModule({
  imports: [CommonModule, StudyRoutingModule],
  declarations: [StudyComponent],
  exports: [StudyComponent]
})

export class StudyModule { }
