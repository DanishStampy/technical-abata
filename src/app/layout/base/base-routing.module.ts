import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasePage } from './base.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'form',
    pathMatch: 'full'
  },
  {
    path: '',
    component: BasePage,
    children: [
      {
        path: 'cat-list',
        loadChildren: () => import('./../../pages/cat-list/cat-list.module').then(m => m.CatListPageModule)
      },
      {
        path: 'form',
        loadChildren: () => import('./../../pages/form/form.module').then(m => m.FormPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasePageRoutingModule {}
