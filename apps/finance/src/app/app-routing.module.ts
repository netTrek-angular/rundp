import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HelloWorldComponent} from "./hello-world/hello-world.component";
import {HelloWorldModule} from "./hello-world/hello-world.module";

const forTestingOnly: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HelloWorldComponent},
];

const routes: Routes = [
  ...forTestingOnly,
  { path: 'dash', loadChildren: () => import('@rp/dash-module').then(m => m.DashModule) }
];

@NgModule( {
  imports: [RouterModule.forRoot( routes ), HelloWorldModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
