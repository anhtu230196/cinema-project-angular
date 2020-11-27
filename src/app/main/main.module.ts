import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { MovieDetailComponent } from "./movie-detail/movie-detail.component";

import { SlickCarouselModule } from "ngx-slick-carousel";
import { PipeModule } from "../pipe/pipe.module";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { PhimComponent } from "./home/phim/phim.component";
import { HeThongRapComponent } from "./home/he-thong-rap/he-thong-rap.component";
import { PhimDangChieuComponent } from "./home/phim/phim-dang-chieu/phim-dang-chieu.component";
import { PhimSapChieuComponent } from "./home/phim/phim-sap-chieu/phim-sap-chieu.component";
import { PhimItemComponent } from "./home/phim/phim-item/phim-item.component";
import { ModalComponent } from "./home/modal/modal.component";
import { TrailerModalComponent } from "./home/modal/trailer-modal/trailer-modal.component";
import { DanhGiaComponent } from "./home/phim/phim-item/danh-gia/danh-gia.component";
import { LichChieuRapComponent } from "./home/he-thong-rap/lich-chieu-rap/lich-chieu-rap.component";
import { LichChieuPhimComponent } from "./home/he-thong-rap/lich-chieu-rap/lich-chieu-phim/lich-chieu-phim.component";
import { GioXemComponent } from "./home/he-thong-rap/lich-chieu-rap/lich-chieu-phim/gio-xem/gio-xem.component";
import { TrangDatVeComponent } from "./trang-dat-ve/trang-dat-ve.component";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    // Khi xài children, thì file html phải có router-outlet
    children: [
      { path: "", component: HomeComponent },
      { path: "movie/:id", component: MovieDetailComponent },
      { path: "datve/:maLichChieu", component: TrangDatVeComponent },
    ],
  },
];

@NgModule({
  declarations: [
    HomeComponent,
    MovieDetailComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    PhimComponent,
    HeThongRapComponent,
    PhimDangChieuComponent,
    PhimSapChieuComponent,
    PhimItemComponent,
    ModalComponent,
    TrailerModalComponent,
    DanhGiaComponent,
    LichChieuRapComponent,
    LichChieuPhimComponent,
    GioXemComponent,
    TrangDatVeComponent,
  ],
  imports: [
    CommonModule,
    PipeModule,
    SlickCarouselModule,
    RouterModule.forChild(routes),
  ],
})
export class MainModule {}
