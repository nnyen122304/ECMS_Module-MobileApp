import { AuthGuard } from './../auth/auth.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HocTapPage } from './hoc-tap.page';

const routes: Routes = [
  {
    path: '',
    // canActivate: [AuthGuard],
    component: HocTapPage
  }
];  

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HocTapPage]
})
export class HocTapPageModule {}
