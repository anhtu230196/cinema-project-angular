import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class CinemaService {
  constructor(private http: HttpClient) {}

  layThongTinHeThongRap(): Observable<any> {
    const url =
      "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap";
    return this.http.get<any>(url);
  }

  layThongTinCumRap(maHeThongRap): Observable<any> {
    let url = `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`;
    return this.http.get<any>(url);
  }

  layLichChieuTheoRap(maRap): Observable<any> {
    let url = `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maRap}&maNhom=GP01`;
    return this.http.get<any>(url);
  }
}
