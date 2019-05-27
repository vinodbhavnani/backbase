import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule, MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  declarations: [  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatProgressSpinnerModule
  ],
  exports: [
    CommonModule,
    MatExpansionModule,
    MatProgressSpinnerModule
  ]
})
export class MaterialModule { }
