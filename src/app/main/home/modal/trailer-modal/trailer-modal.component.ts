import { Component, HostListener, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-trailer-modal",
  templateUrl: "./trailer-modal.component.html",
  styleUrls: ["./trailer-modal.component.scss"],
})
export class TrailerModalComponent implements OnInit {
  @Input() trailer;
  currentHeight: number;
  isClose: boolean;
  @HostListener("window: resize")
  onResize() {
    this.currentHeight = window.innerHeight;
  }

  constructor() {}

  ngOnInit(): void {
    console.log(this.trailer);
  }
}
