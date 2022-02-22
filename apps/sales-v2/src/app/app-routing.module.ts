import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {commonRoutes} from "@rp/ui";


const routes: Routes = [
  ...commonRoutes,
];

@NgModule( {
  imports: [RouterModule.forRoot( routes, { initialNavigation: 'enabledBlocking' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
