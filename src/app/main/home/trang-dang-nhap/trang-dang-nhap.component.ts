import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthenticationService } from "src/app/core/services/authentication.service";

@Component({
  selector: "app-trang-dang-nhap",
  templateUrl: "./trang-dang-nhap.component.html",
  styleUrls: ["./trang-dang-nhap.component.scss"],
})
export class TrangDangNhapComponent implements OnInit {
  @Input() isLogin;
  @Output() transUser = new EventEmitter();
  errors: string;
  previousUrl: string;
  constructor(private auth: AuthenticationService, private router: Router) {
    this.formDangNhap = new FormGroup({
      TaiKhoan: new FormControl(null, Validators.required),
      MatKhau: new FormControl(null, Validators.required),
    });
  }

  public formDangNhap: FormGroup;
  hideLoginPopup() {
    this.isLogin = false;
  }
  dangNhap() {
    this.formDangNhap.markAllAsTouched();
    if (this.formDangNhap.invalid) {
      return;
    }
    this.auth.dangNhap(this.formDangNhap.value).subscribe((res) => {
      localStorage.setItem("userInfo", JSON.stringify(res));
    }),
      (err) => {
        this.errors = err;
      };
  }

  ngOnInit(): void {}
}
