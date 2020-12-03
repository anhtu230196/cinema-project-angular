import { Injectable } from "@angular/core";
import { Ghe } from "../models/ghe";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  // Từ angular 6, các service đã được gắn vào root
  // của project thông qua providedIn: 'root'
  // Không cần gắn vào prividers ở AppModule
  providedIn: "root",
})
export class GheService {
  constructor(private http: HttpClient) {}

  layDanhSachPhongVe(maLichChieu: number): Observable<any> {
    const url = `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`;
    return this.http.get(url);
  }

  datVe(value: any): Observable<any> {
    const url = "https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe";
    return this.http.post(url, value);
  }
}
