import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api'; // Địa chỉ API backend

  constructor(private http: HttpClient) {}

  // Hàm đăng nhập
  dangnhap(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { Email: email, MatKhau: password });
  }

  // Hàm đăng ký
  dangki(TenKH: string, SDT: string, Email: string, MatKhau: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, { TenKH, SDT, Email, MatKhau });
  }
}
