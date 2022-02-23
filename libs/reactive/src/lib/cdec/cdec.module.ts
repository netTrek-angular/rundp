import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdecComponent } from './cdec.component';
import { CdecInnerComponent } from './cdec-inner.component';



@NgModule({
  declarations: [
    CdecComponent,
    CdecInnerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CdecComponent
  ]
})
export class CdecModule { }
