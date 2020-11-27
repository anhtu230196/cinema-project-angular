import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Movie } from "src/app/core/models/movies";

@Component({
  selector: "app-phim-item",
  templateUrl: "./phim-item.component.html",
  styleUrls: ["./phim-item.component.scss"],
})
export class PhimItemComponent implements OnInit {
  @Input() phim: Movie;
  @Output() transTrailer = new EventEmitter();
  constructor() {}

  getTrailer(trailer) {
    this.transTrailer.emit(trailer);
  }
  ngOnInit(): void {}
}
