import { Component, HostListener, OnChanges, OnInit } from "@angular/core";
import { CinemaService } from "../../../core/services/cinema.service";
@Component({
  selector: "app-he-thong-rap",
  templateUrl: "./he-thong-rap.component.html",
  styleUrls: ["./he-thong-rap.component.scss"],
})
export class HeThongRapComponent implements OnInit, OnChanges {
  dsHeThongRap: [] = [];
  maHeThong: string = "";

  indexActive: number = 0;
  changeIndex(index) {
    this.indexActive = index;
  }
  constructor(private cinemaService: CinemaService) {}

  layMaHeThong(maHeThongChon) {
    // Chọn lại hệ thống rạp để truyền lại sang component lich-chieu-rap
    this.maHeThong = maHeThongChon;
  }

  //ngOnInIt chỉ chạy 1 lần sau khi khởi động component
  ngOnInit(): void {
    this.cinemaService.layThongTinHeThongRap().subscribe(
      (res) => {
        this.maHeThong = res[0].maHeThongRap; // Sét hệ thống rạp ban đầu khi trình duyệt khởi động
        this.dsHeThongRap = res;
        console.log("dsHeThong: ", this.dsHeThongRap);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnChanges(): void {}
}
