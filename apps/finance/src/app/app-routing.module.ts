import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HelloWorldComponent} from "./hello-world/hello-world.component";

const forTestingOnly: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HelloWorldComponent},
];

const routes: Routes = [
  ...forTestingOnly,
  { path: 'dash', loadChildren: () => import('./dash/dash.module').then(m => m.DashModule) }
];

@NgModule( {
  imports: [RouterModule.forRoot( routes )],
  exports: [RouterModule]
})
export class AppRoutingModule {}
