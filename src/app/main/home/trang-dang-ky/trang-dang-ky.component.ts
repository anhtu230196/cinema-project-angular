import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthenticationService } from "src/app/core/services/authentication.service";
import { PatternService } from "src/app/core/services/pattern.service";

@Component({
  selector: "app-trang-dang-ky",
  templateUrl: "./trang-dang-ky.component.html",
  styleUrls: ["./trang-dang-ky.component.scss"],
})
export class TrangDangKyComponent implements OnInit {
  public formDangKy: FormGroup;
  errors: any = {};
  DangKy(value) {
    this.formDangKy.markAllAsTouched();
    if (this.formDangKy.invalid) {
      return;
    }
    this.errors = [];
    this.auth.dangKy(value).subscribe((res) => {
      alert("Đăng ký thành công!");
      this.route.navigate(["/"]);
    }),
      (err) => {
        this.errors = err;
      };
  }
  constructor(
    private auth: AuthenticationService,
    private route: Router,
    private pattern: PatternService
  ) {
    this.formDangKy = new FormGroup({
      taiKhoan: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(this.pattern.Pattern.taiKhoan),
      ]),
      matKhau: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      hoTen: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.pattern.Pattern.email),
      ]),
      soDt: new FormControl(
        null,
        Validators.pattern(this.pattern.Pattern.soDt)
      ),
    });
  }

  ngOnInit(): void {}
}
