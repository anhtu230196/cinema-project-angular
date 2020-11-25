import { Component, Input, OnInit } from "@angular/core";
import { Movie } from "src/app/core/models/movies";

@Component({
  selector: "app-phim-sap-chieu",
  templateUrl: "./phim-sap-chieu.component.html",
  styleUrls: ["./phim-sap-chieu.component.scss"],
})
export class PhimSapChieuComponent implements OnInit {
  @Input() phimSC: Movie[];
  constructor() {}

  ngOnInit(): void {}
}
