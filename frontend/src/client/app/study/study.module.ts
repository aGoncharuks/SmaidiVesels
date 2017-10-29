import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudyComponent } from './study.component';
import { StudyRoutingModule } from './study-routing.module';
import { MaterialModule } from '../shared/material.module';
import { StudyService } from './study.service';

@NgModule({
  imports: [CommonModule,
    StudyRoutingModule,
    MaterialModule],
  declarations: [StudyComponent],
  exports: [StudyComponent],
  providers: [StudyService]
})

export class StudyModule { }
