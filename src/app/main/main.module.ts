import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { MovieDetailComponent } from "./movie-detail/movie-detail.component";

import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { PhimComponent } from './home/phim/phim.component';
import { HeThongRapComponent } from './home/he-thong-rap/he-thong-rap.component';
import { PhimDangChieuComponent } from './home/phim/phim-dang-chieu/phim-dang-chieu.component';
import { PhimSapChieuComponent } from './home/phim/phim-sap-chieu/phim-sap-chieu.component';
import { PhimItemComponent } from './home/phim/phim-item/phim-item.component';
import { ModalComponent } from './home/modal/modal.component';

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    // Khi xài children, thì file html phải có router-outlet
    children: [
      { path: "", component: HomeComponent },
      { path: "movie/:id", component: MovieDetailComponent },
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
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class MainModule {}
