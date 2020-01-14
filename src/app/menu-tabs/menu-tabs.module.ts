import { AuthGuard } from './../auth/auth.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuTabsPage } from './menu-tabs.page';

const routes: Routes = [
  {
    path: 'menu-tabs',
    component: MenuTabsPage,
    children: [
      {  
        path: 'trang-chu',
        children: [
          {
            path: '',
            loadChildren: '../trang-chu/trang-chu.module#TrangChuPageModule'
          }
        ]
      }, 
      {
        path: 'danh-muc', 
        children: [
          {
            path: '',
            loadChildren: '../danh-muc/danh-muc.module#DanhMucPageModule'
          },
          {  
            path: 'lop/:maKhoa',
            children:[  
              {
                path:'',
                loadChildren:'../components/danhMuc/lop/lop.module#LopPageModule'
              }, 
            ]
          },
          {
            path: 'lop/:maKhoa/de-cuong/:maLop', 
            children:[
              {  
                path:'',
                loadChildren:'../components/danhMuc/de-cuong/de-cuong.module#DeCuongPageModule'
              }
            ]
          },
          {
            path: 'lop/:maKhoa/ket-qua/:maLop', 
            children:[
              { 
                path:'',
                loadChildren:'../components/danhMuc/ket-qua/ket-qua.module#KetQuaPageModule'
              }
            ]
          },
        ] 
      },
      { 
        path: 'hoc-tap',
        children: [
          {
            path: '',
            loadChildren: '../hoc-tap/hoc-tap.module#HocTapPageModule'
          },
          {
            path: 'segment/:maLop', 
            children:[
              {
                path:'',
                loadChildren:'../components/hocTap/segment/segment.module#SegmentPageModule'
              }
            ] 
          },
          { 
            path: 'segment/:maLop/hoc-vien', 
            children:[
              {
                path:'',
                loadChildren:'../components/hocTap/hoc-vien/hoc-vien.module#HocVienPageModule'
              }
            ]
          }, 
          {
            path: 'segment/:maLop/lop-hoc-vien', 
            children:[
              {
                path:'',
                loadChildren:'../components/hocTap/lop-hoc-vien/lop-hoc-vien.module#LopHocVienPageModule'
              }
            ]
          },
          {
            path: 'segment/:maLop/thoi-khoa-bieu', 
            children:[
              {
                path:'',
                loadChildren:'../components/hocTap/thoi-khoa-bieu/thoi-khoa-bieu.module#ThoiKhoaBieuPageModule'
              }
            ]
          },
          { 
            path: 'segment/:maLop/nhan-xet', 
            children:[
              {
                path:'',
                loadChildren:'../components/hocTap/nhan-xet/nhan-xet.module#NhanXetPageModule'
              }
            ]
          },
        ]
      },    
      {
        path: 'khuyen-mai',
        children: [
          {
            path: '',
            loadChildren: '../khuyen-mai/khuyen-mai.module#KhuyenMaiPageModule'
          }
        ]
      },
      {
        path: 'tai-khoan',
        children: [
          {
            path: '',
            loadChildren: '../tai-khoan/tai-khoan.module#TaiKhoanPageModule'
          }
        ]
      }

    ]
  },
  {
    path:'',
    redirectTo: 'menu-tabs/danh-muc',
    pathMatch: 'full',
    // canActivate: [AuthGuard]
  }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuTabsPage]
})
export class MenuTabsPageModule {}
