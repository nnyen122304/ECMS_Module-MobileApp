import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DanhMucPage } from './danh-muc.page';

const routes: Routes = [
  {
    path: '',
    component: DanhMucPage

  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DanhMucPage]
})
export class DanhMucPageModule {}
