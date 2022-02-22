import {Routes} from "@angular/router";
import {HelloWorldComponent} from "../../hello-world/hello-world.component";

export const commonRoutes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HelloWorldComponent},
];
