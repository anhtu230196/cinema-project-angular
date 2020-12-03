import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-chi-tiet-info",
  templateUrl: "./chi-tiet-info.component.html",
  styleUrls: ["./chi-tiet-info.component.scss"],
})
export class ChiTietInfoComponent implements OnInit {
  @Input() phim: any;
  constructor() {}

  ngOnInit(): void {}
}
