import { Component, HostListener, OnInit } from "@angular/core";
import { CinemaService } from "../../../core/services/cinema.service";
@Component({
  selector: "app-he-thong-rap",
  templateUrl: "./he-thong-rap.component.html",
  styleUrls: ["./he-thong-rap.component.scss"],
})
export class HeThongRapComponent implements OnInit {
  dsHeThongRap: [] = [];
  maRap: string = "";
  currentWindowWidth: number;
  @HostListener("window:resize")
  onResize() {
    this.currentWindowWidth = window.innerWidth;
  }
  indexActive: number = 0;
  changeIndex(index) {
    this.indexActive = index;
  }
  constructor(private cinemaService: CinemaService) {}

  layHeThongRap() {
    this.cinemaService.layThongTinHeThongRap().subscribe(
      (res) => {
        console.log(res);
        this.maRap = res[0].maHeThongRap;
        this.dsHeThongRap = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  ngOnInit(): void {
    this.layHeThongRap();
    if (this.currentWindowWidth <= 420) {
      this.maRap = null;
    }
  }
}
