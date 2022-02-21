import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UseTemplateOutletComponent } from './use-template-outlet.component';

const routes: Routes = [{ path: '', component: UseTemplateOutletComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UseTemplateOutletRoutingModule { }
