import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PhongtroComponent } from './phongtro/phongtro.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { DangkiComponent } from './dangki/dangki.component';
import { ThongtincanhanComponent } from './thongtincanhan/thongtincanhan.component';
import { ChitethongtroComponent } from './chitethongtro/chitethongtro.component';
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

// ✅ Import thêm module cần thiết
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// ✅ Import DangnhapComponent (standalone)
import { DangnhapComponent } from './dangnhap/dangnhap.component';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, FooterComponent, PhongtroComponent, TrangchuComponent, DangkiComponent, ThongtincanhanComponent, ChitethongtroComponent, DichvuComponent, ThuetroComponent, PhongdathueComponent, ThanhtoanhangthangComponent, DoimatkhauComponent, BaidangAdminComponent, DanhgiaAdminComponent, DichvuAdminComponent, GiaodichAdminComponent, HopdongAdminComponent, KhachhangAdminComponent, KhutroAdminComponent, PhongAdminComponent, PhongdichvuAdminComponent, ThongkeAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    DangnhapComponent // ✅ Thêm vào đây thay vì declarations
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
