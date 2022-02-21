import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UseComponentOutletComponent } from './use-component-outlet.component';

const routes: Routes = [{ path: '', component: UseComponentOutletComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UseComponentOutletRoutingModule { }
