import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-lich-chieu-phim",
  templateUrl: "./lich-chieu-phim.component.html",
  styleUrls: ["./lich-chieu-phim.component.scss"],
})
export class LichChieuPhimComponent implements OnInit {
  @Input() maRap: string;
  @Input() maCumRap: string;
  constructor() {}

  ngOnInit(): void {}
}
