import {
  Component,
  HostListener,
  Input,
  OnChanges,
  OnInit,
} from "@angular/core";
import { CinemaService } from "src/app/core/services/cinema.service";

@Component({
  selector: "app-lich-chieu-phim",
  templateUrl: "./lich-chieu-phim.component.html",
  styleUrls: ["./lich-chieu-phim.component.scss"],
})
export class LichChieuPhimComponent implements OnInit, OnChanges {
  @Input() maRap: string;
  @Input() maCumRap: string;
  constructor(private cinemaService: CinemaService) {}
  phimChieu: boolean = true;
  lichChieuPhim: [] = [];
  suatChieu: [] = [];
  MaPhim: number;
  isShowGio: boolean = false;
  currentWindowWidth: number;
  @HostListener("window:resize")
  onResize() {
    this.currentWindowWidth = window.innerWidth;
  }
  showGio() {
    this.isShowGio = !this.isShowGio;
  }
  layMaPhim(value: number) {
    this.MaPhim = value;
  }

  ngOnInit(): void {
    this.currentWindowWidth = window.innerWidth;
  }

  ngOnChanges(): void {
    this.cinemaService.layLichChieuTheoRap(this.maRap).subscribe((res) => {
      console.log("res", res);
      let dsRap: any[] = res[0].lstCumRap;
      console.log("dsRap:", dsRap);
      let rap = dsRap.filter((rap) => rap.maCumRap === this.maCumRap);
      console.log("sau khi filter", rap);
      if (rap.length > 0) {
        this.lichChieuPhim = rap[0].danhSachPhim;
        this.phimChieu = true;
      } else {
        this.phimChieu = false;
      }
    });
  }
}
