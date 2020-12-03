import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-modal-warning",
  templateUrl: "./modal-warning.component.html",
  styleUrls: ["./modal-warning.component.scss"],
})
export class ModalWarningComponent implements OnInit {
  @Input() warning: string;
  constructor() {}

  ngOnInit(): void {}
}
