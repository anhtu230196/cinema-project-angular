import {
  Component,
  HostListener,
  Input,
  OnChanges,
  OnInit,
} from "@angular/core";
import { CinemaService } from "src/app/core/services/cinema.service";

@Component({
  selector: "app-lich-chieu-rap",
  templateUrl: "./lich-chieu-rap.component.html",
  styleUrls: ["./lich-chieu-rap.component.scss"],
})
export class LichChieuRapComponent implements OnInit, OnChanges {
  @Input() maHeThong;
  dsRap: [] = [];
  indexActive: number = 0;
  maCumRap: string = "";
  isShowCumRap: boolean = false;
  currentWindowWidth: number;
  @HostListener("window: resize")
  onReSize() {
    this.currentWindowWidth = window.innerWidth;
  }

  constructor(private cinemaService: CinemaService) {}

  showCumRap() {
    this.isShowCumRap = !this.isShowCumRap;
  }

  layMaCumRap(value) {
    this.maCumRap = value;
  }

  changeIndex(index) {
    this.indexActive = index;
  }

  layThongTinCumRap() {
    this.cinemaService.layThongTinCumRap(this.maHeThong).subscribe(
      (res) => {
        console.log("danh sách rạp: ", res);
        this.dsRap = res;
        this.maCumRap = res[0].maCumRap;
      },
      (err) => {}
    );
  }

  ngOnInit(): void {
    this.currentWindowWidth = window.innerWidth;
  }

  ngOnChanges(): void {
    this.layThongTinCumRap();
  }
}
