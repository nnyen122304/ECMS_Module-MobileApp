import { DangNhapPage } from './../../../auth/dang-nhap/dang-nhap.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LopPage } from './lop.page';

const routes: Routes = [
  {
    path: '',
    component: LopPage
  }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  
  ],
  declarations: [LopPage],
  //them vao de dismiss
  // entryComponents: [DangNhapPage]
})
export class LopPageModule {}
