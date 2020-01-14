import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { KhuyenMaiPage } from './khuyen-mai.page';

const routes: Routes = [
  {
    path: '',
    component: KhuyenMaiPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [KhuyenMaiPage]
})
export class KhuyenMaiPageModule {}
