import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhongtroComponent } from './phongtro/phongtro.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { DangkiComponent } from './dangki/dangki.component';
import { ChitethongtroComponent } from './chitethongtro/chitethongtro.component';
import { ThongtincanhanComponent } from './thongtincanhan/thongtincanhan.component';
import { DichvuComponent } from './dichvu/dichvu.component';
import { ThuetroComponent } from './thuetro/thuetro.component';
import { PhongdathueComponent } from './phongdathue/phongdathue.component';
import { ThanhtoanhangthangComponent } from './thanhtoanhangthang/thanhtoanhangthang.component';
import { DoimatkhauComponent } from './doimatkhau/doimatkhau.component';
import { BaidangAdminComponent } from './baidang-admin/baidang-admin.component';
import { DanhgiaAdminComponent } from './danhgia-admin/danhgia-admin.component';
import { DichvuAdminComponent } from './dichvu-admin/dichvu-admin.component';
import { GiaodichAdminComponent } from './giaodich-admin/giaodich-admin.component';
import { HopdongAdminComponent } from './hopdong-admin/hopdong-admin.component';
import { KhachhangAdminComponent } from './khachhang-admin/khachhang-admin.component';
import { KhutroAdminComponent } from './khutro-admin/khutro-admin.component';
import { PhongAdminComponent } from './phong-admin/phong-admin.component';
import { PhongdichvuAdminComponent } from './phongdichvu-admin/phongdichvu-admin.component';
import { ThongkeAdminComponent } from './thongke-admin/thongke-admin.component';
const routes: Routes = [
  { path: 'phongtro', component: PhongtroComponent },
  { path: 'dangki', component: DangkiComponent },
  { path: 'trangchu', component: TrangchuComponent },
  { path: 'dichvu', component: DichvuComponent },
  { path: 'dangnhap', component: DangnhapComponent },
  { path: 'chitietphongtro', component: ChitethongtroComponent },
  { path: 'thongtincanhan', component: ThongtincanhanComponent },
  { path: 'thuetro', component: ThuetroComponent },
  { path: 'phongdathue', component: PhongdathueComponent },
  { path: 'thanhtoanhangthang', component: ThanhtoanhangthangComponent },
  { path: 'doimatkhau', component: DoimatkhauComponent },
  { path: 'baidang-admin', component: BaidangAdminComponent },
  { path: 'danhgia-admin', component: DanhgiaAdminComponent },
  { path: 'dichvu-admin', component: DichvuAdminComponent },
  { path: 'giaodich-admin', component: GiaodichAdminComponent },
  { path: 'hopdong-admin', component: HopdongAdminComponent },
  { path: 'khachhang-admin', component: KhachhangAdminComponent },
  { path: 'khutro-admin', component: KhutroAdminComponent },
  { path: 'phong-admin', component: PhongAdminComponent },
  { path: 'phongdichvu-admin', component: PhongdichvuAdminComponent },
  { path: 'thongke-admin', component: ThongkeAdminComponent },

  { path: '', redirectTo: '/trangchu', pathMatch: 'full' } // Trang mặc định
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
