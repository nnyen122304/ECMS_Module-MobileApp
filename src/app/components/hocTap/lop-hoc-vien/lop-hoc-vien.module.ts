import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LopHocVienPage } from './lop-hoc-vien.page';

const routes: Routes = [
  {
    path: '',
    component: LopHocVienPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LopHocVienPage]
})
export class LopHocVienPageModule {}
