import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatListPageRoutingModule } from './cat-list-routing.module';

import { CatListPage } from './cat-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatListPageRoutingModule
  ],
  declarations: [CatListPage]
})
export class CatListPageModule {}
