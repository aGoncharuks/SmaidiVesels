import { NgModule } from '@angular/core';
import {
  MatCardModule, MatDialogModule, MatExpansionModule, MatFormFieldModule, MatInputModule, MatRadioModule,
  MatSelectModule,
  MatStepperModule, MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    MatCardModule,
    MatRadioModule,
    MatStepperModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule
  ],
  exports: [
    MatCardModule,
    MatRadioModule,
    MatStepperModule,
    MatExpansionModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule
  ]
})
export class MaterialModule { }
