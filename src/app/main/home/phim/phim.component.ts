import { Component, Input, OnInit } from "@angular/core";
import { Movie } from "src/app/core/models/movies";

@Component({
  selector: "app-phim",
  templateUrl: "./phim.component.html",
  styleUrls: ["./phim.component.scss"],
})
export class PhimComponent implements OnInit {
  @Input() dsPhim: Movie[];
  isActive: boolean = true; // hiện phim đang chiếu
  doiPhim(value) {
    this.isActive = value;
  }
  constructor() {}

  ngOnInit(): void {}
}
