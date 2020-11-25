import { Component, Input, OnInit } from "@angular/core";
import { Movie } from "src/app/core/models/movies";

@Component({
  selector: "app-phim-dang-chieu",
  templateUrl: "./phim-dang-chieu.component.html",
  styleUrls: ["./phim-dang-chieu.component.scss"],
})
export class PhimDangChieuComponent implements OnInit {
  @Input() phimDC: Movie[];
  constructor() {}

  ngOnInit(): void {}
}
