import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DynComponent} from './dyn.component';

const routes: Routes = [
  {
    path: '', component: DynComponent, children: [
      {
        path: '', pathMatch: 'full', redirectTo:'embedded-view'
      },
      {
        path: 'use-template',
        loadChildren: () => import('./use-template-outlet/use-template-outlet.module').then(m => m.UseTemplateOutletModule)
      },
      { path: 'embedded-view',
        loadChildren: () => import('./embedded-view/embedded-view.module')
          .then(m => m.EmbeddedViewModule) },
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DynRoutingModule {
}
