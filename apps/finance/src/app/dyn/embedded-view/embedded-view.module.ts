import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmbeddedViewRoutingModule } from './embedded-view-routing.module';
import { EmbeddedViewComponent } from './embedded-view.component';
import { EmbedViaContentComponent } from './embed-via-content/embed-via-content.component';
import { EmbedableDirective } from './embed-via-content/embedable.directive';


@NgModule({
  declarations: [
    EmbeddedViewComponent,
    EmbedViaContentComponent,
    EmbedableDirective
  ],
  imports: [
    CommonModule,
    EmbeddedViewRoutingModule
  ]
})
export class EmbeddedViewModule { }
