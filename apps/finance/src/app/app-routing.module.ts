import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CdecComponent} from "@rp/reactive";

const routes: Routes = [
  { path: '', component: CdecComponent },
  { path: 'dyn', loadChildren: () => import('./dyn/dyn.module').then(m => m.DynModule) },
  { path: 'dash', loadChildren: () => import('@rp/dash').then(m => m.DashModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
