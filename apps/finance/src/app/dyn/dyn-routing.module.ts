import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DynComponent} from './dyn.component';

const routes: Routes = [
  {
    path: '', component: DynComponent, children: [
      {
        path: '', pathMatch: 'full', redirectTo:'use-component'
      },
      {
        path: 'use-template',
        loadChildren: () => import('./use-template-outlet/use-template-outlet.module')
          .then(m => m.UseTemplateOutletModule)
      },
      { path: 'embedded-view',
        loadChildren: () => import('./embedded-view/embedded-view.module')
          .then(m => m.EmbeddedViewModule) },
      { path: 'use-component',
        loadChildren: () => import('./use-component-outlet/use-component-outlet.module')
          .then(m => m.UseComponentOutletModule) },
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DynRoutingModule {
}
