import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UseTemplateOutletRoutingModule } from './use-template-outlet-routing.module';
import { UseTemplateOutletComponent } from './use-template-outlet.component';


@NgModule({
  declarations: [
    UseTemplateOutletComponent
  ],
  imports: [
    CommonModule,
    UseTemplateOutletRoutingModule
  ]
})
export class UseTemplateOutletModule { }
