import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "../../../../../../core/services/authentication.service";

@Component({
  selector: "app-gio-xem",
  templateUrl: "./gio-xem.component.html",
  styleUrls: ["./gio-xem.component.scss"],
})
export class GioXemComponent implements OnInit {
  @Input() mangGioXem;
  currentUser: any = {};
  constructor(private auth: AuthenticationService, private router: Router) {}

  datVe(value) {
    if (this.currentUser.taiKhoan) {
      this.router.navigate([`/datve/${value}`]);
    } else {
      alert("Vui long đăng nhập");
    }
  }

  ngOnInit(): void {
    this.auth.currentUser.subscribe((res) => {
      this.currentUser = res;
    });
  }
}
