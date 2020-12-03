import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  private currentUserSubject = new BehaviorSubject({});
  private currentAdminSubject = new BehaviorSubject(null);
  currentUser = this.currentUserSubject.asObservable();
  currentAdmin = this.currentAdminSubject.asObservable();

  constructor(private http: HttpClient) {}

  inItCurrentUser() {
    const user = localStorage.getItem("userInfo");
    if (user) {
      this.currentUserSubject.next(JSON.parse(user));
    }
  }
  inItCurrentAdmin() {
    const admin = localStorage.getItem("adminInfo");
    if (admin) {
      this.currentAdminSubject.next(JSON.parse(admin));
    }
  }
  dangNhap(values: any): Observable<any> {
    let url = "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap";
    return this.http.post(url, values).pipe(
      tap((res) => {
        this.currentUserSubject.next(res);
        this.currentAdminSubject.next(res);
      })
    );
  }

  dangKy(values: any): Observable<any> {
    let url = "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy";
    return this.http.post(url, { ...values, maNhom: "GP05" }).pipe(
      tap((res) => {
        this.currentUserSubject.next(res);
      })
    );
  }
  dangXuat(value) {
    if (value == "taiKhoan") {
      this.currentUserSubject.next({});
    } else if (value == "admin") {
      this.currentAdminSubject.next(null);
    }
  }
}
