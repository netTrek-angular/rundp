import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmbeddedViewRoutingModule } from './embedded-view-routing.module';
import { EmbeddedViewComponent } from './embedded-view.component';


@NgModule({
  declarations: [
    EmbeddedViewComponent
  ],
  imports: [
    CommonModule,
    EmbeddedViewRoutingModule
  ]
})
export class EmbeddedViewModule { }
