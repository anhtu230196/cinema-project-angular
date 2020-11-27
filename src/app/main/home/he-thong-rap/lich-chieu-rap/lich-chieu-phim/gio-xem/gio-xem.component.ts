import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-gio-xem",
  templateUrl: "./gio-xem.component.html",
  styleUrls: ["./gio-xem.component.scss"],
})
export class GioXemComponent implements OnInit {
  @Input() mangGioXem;
  constructor() {}

  ngOnInit(): void {}
}
