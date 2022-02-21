import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UseComponentOutletRoutingModule } from './use-component-outlet-routing.module';
import { UseComponentOutletComponent } from './use-component-outlet.component';


@NgModule({
  declarations: [
    UseComponentOutletComponent
  ],
  imports: [
    CommonModule,
    UseComponentOutletRoutingModule
  ]
})
export class UseComponentOutletModule { }
