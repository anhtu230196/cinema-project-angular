import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { HttpClientModule } from "@angular/common/http";
import { PipeModule } from "./pipe/pipe.module";
import { AppComponent } from "./app.component";
// Có nhiều loại module
// Module do angular cung cấp: FormsModule, RouterModule, HttpModule
// Module do dev tự định nghĩa

import { SlickCarouselModule } from "ngx-slick-carousel";

import { RouterModule, Routes } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  {
    path: "admin",
    loadChildren: () =>
      import("./admin/admin.module").then((m) => m.AdminModule),
  },
  {
    path: "",
    loadChildren: () => import("./main/main.module").then((m) => m.MainModule),
  },
];

@NgModule({
  // Khai báo component sẽ được module quản lý
  declarations: [AppComponent],
  // Khai báo các module sẽ được sử dụng
  // Ngoại trừ AppModule đã được import ở main.ts
  // Tất cả các module khác đều phải được import mới sử dụng được
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    SlickCarouselModule,
    PipeModule,
    BrowserAnimationsModule,
  ],
  // Nơi gắn các services vào
  providers: [],
  // Khai báo để AppComponent là component chạy đầu tiên của module
  bootstrap: [AppComponent],
})
export class AppModule {}
