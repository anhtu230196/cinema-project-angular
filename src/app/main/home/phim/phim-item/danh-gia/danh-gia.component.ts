import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-danh-gia",
  templateUrl: "./danh-gia.component.html",
  styleUrls: ["./danh-gia.component.scss"],
})
export class DanhGiaComponent implements OnInit {
  @Input() danhGia;
  @Input() phimItem;
  soLuongSao = [];
  constructor() {}

  ngOnInit(): void {}
}
