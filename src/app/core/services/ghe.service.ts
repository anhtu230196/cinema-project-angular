import { Injectable } from "@angular/core";
import { Ghe } from "../models/ghe";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  // Từ angular 6, các service đã được gắn vào root
  // của project thông qua providedIn: 'root'
  // Không cần gắn vào prividers ở AppModule
  providedIn: "root",
})
export class GheService {
  private lichDatVeSubject = new BehaviorSubject("");
  lichDatVe = this.lichDatVeSubject.asObservable();

  constructor(private http: HttpClient) {}

  getLichDatVe(value) {
    //value là chuỗi xác nhận thông tin ở trang thông tin người dùng để active "thông tin", "đổi mật khẩu", "xem lịch sử đặt vé"
    this.lichDatVeSubject.next(value);
  }

  layDanhSachPhongVe(maLichChieu: number): Observable<any> {
    const url = `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`;
    return this.http.get(url);
  }

  datVe(value: any): Observable<any> {
    const url = "https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe";
    return this.http.post(url, value);
  }
}
