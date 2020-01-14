import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';

 
const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  // { path: 'lop/:maKhoa', loadChildren: './components/lop/lop.module#LopPageModule' },
  // { path: 'detail-lop', loadChildren: './components/detail-lop/detail-lop.module#DetailLopPageModule' },
  // { path: 'register', loadChildren: './components/Session_Login/register/register.module#RegisterPageModule' },
  { path: '',  loadChildren: './menu-tabs/menu-tabs.module#MenuTabsPageModule' },
  { path: 'localnotifications', loadChildren: './components/thongBao/localnotifications/localnotifications.module#LocalnotificationsPageModule' },
  // { path: 'login', loadChildren: './components/Session_Login/login/login.module#LoginPageModule' },
  { path: 'thithu', canActivate: [AuthGuard], loadChildren: './components/danhMuc/thithu/thithu.module#ThithuPageModule' },
  { path: 'dangki', loadChildren: './auth/dangki/dangki.module#DangkiPageModule' },
  { path: 'dang-nhap', loadChildren: './auth/dang-nhap/dang-nhap.module#DangNhapPageModule' },
  // { path: 'ket-qua', loadChildren: './components/danhMuc/ket-qua/ket-qua.module#KetQuaPageModule' },
  // { path: 'nhan-xet', loadChildren: './components/hocTap/nhan-xet/nhan-xet.module#NhanXetPageModule' },
  // { path: 'de-cuong', loadChildren: './components/hocTap/de-cuong/de-cuong.module#DeCuongPageModule' },
  // { path: 'hoc-vien', loadChildren: './components/hocTap/hoc-vien/hoc-vien.module#HocVienPageModule' },
  // { path: 'lop-hoc-vien', loadChildren: './components/hocTap/lop-hoc-vien/lop-hoc-vien.module#LopHocVienPageModule' },
  // { path: 'thoi-khoa-bieu', loadChildren: './components/hocTap/thoi-khoa-bieu/thoi-khoa-bieu.module#ThoiKhoaBieuPageModule' },
  // { path: 'segment', loadChildren: './components/hocTap/segment/segment.module#SegmentPageModule' },
  // { path: 'trang-chu', loadChildren: './trang-chu/trang-chu.module#TrangChuPageModule' },
  // { path: 'danh-muc', loadChildren: './danh-muc/danh-muc.module#DanhMucPageModule' },
  // { path: 'hoc-tap', loadChildren: './hoc-tap/hoc-tap.module#HocTapPageModule' },
  // { path: 'khuyen-mai', loadChildren: './khuyen-mai/khuyen-mai.module#KhuyenMaiPageModule' },
  // { path: 'tai-khoan', loadChildren: './tai-khoan/tai-khoan.module#TaiKhoanPageModule' },
];  

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
