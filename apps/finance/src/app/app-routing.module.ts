import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {commonRoutes} from "@rp/ui";


const routes: Routes = [
  ...commonRoutes,
  { path: 'dash', loadChildren: () => import('@rp/dash-module').then(m => m.DashModule) }
];

@NgModule( {
  imports: [RouterModule.forRoot( routes )],
  exports: [RouterModule]
})
export class AppRoutingModule {}
