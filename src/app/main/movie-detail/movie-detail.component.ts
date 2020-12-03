import { Component, HostListener, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CinemaService } from "src/app/core/services/cinema.service";
import { MoviesService } from "src/app/core/services/movies.service";
@Component({
  selector: "app-movie-detail",
  templateUrl: "./movie-detail.component.html",
  styleUrls: ["./movie-detail.component.scss"],
})
export class MovieDetailComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MoviesService,
    private cinema: CinemaService
  ) {}

  chiTietPhim: any | null = null;
  loading: boolean = false;
  trailer: string = "";
  cumRapActive: []; //Hệ thống rạp chiếu theo phim
  dieuKien: string = "lichChieu";
  currentWidth: number;
  @HostListener("window: resize")
  onResize() {
    this.currentWidth = window.innerWidth;
  }
  changeDieuKien(value) {
    // Active Lịch chiếu, Thông tin, Nhận xét
    this.dieuKien = value;
  }

  getTrailer() {
    this.trailer = this.chiTietPhim.trailer;
  }
  removeTrailer() {
    this.trailer = "";
  }

  ngOnInit(): void {
    this.currentWidth = window.innerWidth;
    this.activatedRoute.params.subscribe({
      next: (params) => {
        this.loading = true;
        this.cinema.layLichChieuTheoPhim(params.id).subscribe({
          next: (result) => {
            console.log(result);
            this.chiTietPhim = result;
            this.loading = false; // pending page status khi dữ liệu chưa tràn về
            this.cumRapActive = result.heThongRapChieu[0].cumRapChieu; // active hệ thống đầu tiên
          },
          error: (error) => {
            this.loading = false;
          },
        });
      },
    });
  }
}
