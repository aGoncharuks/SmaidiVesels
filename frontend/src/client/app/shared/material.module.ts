import { NgModule } from '@angular/core';
import { MatCardModule, MatRadioModule } from '@angular/material';

@NgModule({
  imports: [
    MatCardModule,
    MatRadioModule
  ],
  exports: [
    MatCardModule,
    MatRadioModule
  ]
})
export class MaterialModule { }
