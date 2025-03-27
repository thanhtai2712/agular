import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dangnhap',
  standalone: true,
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class DangnhapComponent {
  loginForm: FormGroup;
  errorMessage: string = '';  // ✅ Thêm biến errorMessage

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      console.log("Đăng nhập thành công!", this.loginForm.value);
      this.errorMessage = '';  // ✅ Xóa thông báo lỗi nếu đăng nhập thành công
    } else {
      this.errorMessage = 'Email hoặc mật khẩu không hợp lệ!';  // ✅ Hiển thị lỗi khi đăng nhập thất bại
    }
  }
}
