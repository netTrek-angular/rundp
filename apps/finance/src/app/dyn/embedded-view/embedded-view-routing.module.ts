import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmbeddedViewComponent } from './embedded-view.component';

const routes: Routes = [{ path: '', component: EmbeddedViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmbeddedViewRoutingModule { }
