import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dangki',
  standalone: false,
  templateUrl: './dangki.component.html',
  styleUrls: ['./dangki.component.css']
})
export class DangkiComponent {
  registerForm: FormGroup;
  message: string = '';
  isLoading: boolean = false; // Trạng thái loading khi đăng ký

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.registerForm = this.fb.group({
      TenKH: ['', Validators.required],
      SDT: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      Email: ['', [Validators.required, Validators.email]],
      MatKhau: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onRegister() {
    if (this.registerForm.invalid) {
      this.message = "Vui lòng nhập đầy đủ thông tin hợp lệ!";
      return;
    }

    this.isLoading = true; // Bật trạng thái loading
    this.message = ""; // Xóa thông báo cũ

    this.http.post('http://localhost:3000/api/auth/dangki', this.registerForm.value)
      .subscribe({
        next: (response: any) => {
          this.message = "Đăng ký thành công! Vui lòng đăng nhập.";
          this.registerForm.reset(); // Reset form sau khi đăng ký thành công
        },
        error: (error) => {
          this.message = error.error?.message || "Lỗi khi đăng ký. Vui lòng thử lại.";
        },
        complete: () => {
          this.isLoading = false; // Tắt trạng thái loading
        }
      });
  }
}
