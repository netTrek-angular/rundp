import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynRoutingModule } from './dyn-routing.module';
import { DynComponent } from './dyn.component';


@NgModule({
  declarations: [
    DynComponent
  ],
  imports: [
    CommonModule,
    DynRoutingModule
  ]
})
export class DynModule { }
