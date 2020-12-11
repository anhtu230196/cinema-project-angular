import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}
  private avatarUserSubject = new BehaviorSubject(null);
  avatarUser = this.avatarUserSubject.asObservable();

  updateAvatarUser(value) {
    this.avatarUserSubject.next(value);
  }

  initAvatarUser() {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    let img;
    if (userInfo) {
      img = JSON.parse(localStorage.getItem(userInfo.taiKhoan));
    }
    if (img) {
      this.avatarUserSubject.next(img);
    } else {
      this.avatarUserSubject.next(null);
    }
  }

  layThongTinUser(values: string): Observable<any> {
    let url =
      "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan";
    return this.http.post(url, { taiKhoan: values });
  }
}
