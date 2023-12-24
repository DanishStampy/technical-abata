import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatListPage } from './cat-list.page';

const routes: Routes = [
  {
    path: '',
    component: CatListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatListPageRoutingModule {}
