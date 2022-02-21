import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./dyn/dyn.module').then(m => m.DynModule) },
  { path: 'dash', loadChildren: () => import('@rp/dash').then(m => m.DashModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
