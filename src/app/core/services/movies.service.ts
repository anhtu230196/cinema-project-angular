import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Movie } from "../models/movies";

@Injectable({
  providedIn: "root",
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getMovieList(): Observable<Movie[]> {
    const url =
      "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01";

    return this.http.get<Movie[]>(url);
  }

  getMovieDetail(id: number): Observable<any> {
    // const url = `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?maPhim=${id}`;

    const url = `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim`;

    let params = new HttpParams();
    params = params.append("maPhim", id.toString());

    return this.http.get<any>(url, { params });
  }

  getMovieListPaging(currentPage: number, pageSize: number) {
    const url =
      "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang";

    let params = new HttpParams();
    params = params
      .append("soTrang", currentPage.toString())
      .append("soPhanTuTrenTrang", pageSize.toString());

    return this.http.get(url, { params });
  }
}
