// import { LoaiPipe } from './../loai.pipe';
import { MaterialModule } from './../../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SegmentPage } from './segment.page';

const routes: Routes = [
  {
    path: '',
    component: SegmentPage
  }
]; 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MaterialModule,
    ReactiveFormsModule,
 
  ],
  declarations: [SegmentPage]
})
export class SegmentPageModule {}
