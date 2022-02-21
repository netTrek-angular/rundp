import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DynComponent} from './dyn.component';

const routes: Routes = [
  {
    path: '', component: DynComponent, children: [
      {
        path: '', pathMatch: 'full', redirectTo:'use-template'
      },
      {
        path: 'use-template',
        loadChildren: () => import('./use-template-outlet/use-template-outlet.module').then(m => m.UseTemplateOutletModule)
      }
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DynRoutingModule {
}
