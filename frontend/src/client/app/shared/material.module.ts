import { NgModule } from '@angular/core';
import {
  MatCardModule, MatExpansionModule, MatRadioModule,
  MatStepperModule
} from '@angular/material';

@NgModule({
  imports: [
    MatCardModule,
    MatRadioModule,
    MatStepperModule,
  ],
  exports: [
    MatCardModule,
    MatRadioModule,
    MatStepperModule,
    MatExpansionModule
  ]
})
export class MaterialModule { }
