import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthenticationService } from "src/app/core/services/authentication.service";
import { GheService } from "src/app/core/services/ghe.service";
import { UserService } from "src/app/core/services/user.service";
import Swal from "sweetalert2/dist/sweetalert2.js";
@Component({
  selector: "app-user-info",
  templateUrl: "./user-info.component.html",
  styleUrls: ["./user-info.component.scss"],
})
export class UserInfoComponent implements OnInit {
  page: number = 1; // page ban đầu ng-pagination
  thongTinDatVe: any[]; // mảng thông tin đặt vé
  warning: string;
  method: any = "thongTin"; // active item 'Thông tin tài khoản' hoặc 'đổi mật khẩu' hoặc 'thông tin đặt vé'
  currentUser: any = {}; // tài khoản đăng nhập
  isShowPassCu: boolean = false; // Show pass cũ (trong đổi pass)
  isShowPassMoi: boolean = false; // Show pass mới (trong đổi pass)
  isShowPassConfirm: boolean = false; // Show pass xác nhận mới (trong đổi pass)
  public formUpdate: FormGroup;
  public formUpdatePass: FormGroup;
  url: any; // hình ảnh avatar
  constructor(
    private user: UserService,
    private auth: AuthenticationService,
    private router: Router,
    private ghe: GheService
  ) {
    this.formUpdate = new FormGroup({
      hoTen: new FormControl(null, Validators.required),
      soDt: new FormControl(null, Validators.required),
    });
    this.formUpdatePass = new FormGroup({
      matKhau: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      matKhauMoi: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      xacNhanMk: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  capNhapMatKhau(value) {
    this.formUpdatePass.markAllAsTouched();
    if (this.formUpdatePass.invalid) {
      return;
    }
    if (value.matKhau === this.currentUser.matKhau) {
      if (value.matKhau === value.matKhauMoi) {
        this.warning = "trungMkCu"; // MK mới không được trùng MK cũ
      } else if (value.matKhauMoi !== value.xacNhanMk) {
        this.warning = "saiXacNhan"; // Xác nhận mk mới không chính xác
      } else {
        this.warning = "";
      }
    } else {
      this.warning = "saiMkCu";
    }
    if ((this.warning = "")) {
      const userUpdate = {
        ...this.currentUser,
        matKhau: value.matKhauMoi,
        maLoaiNguoiDung: "KhachHang",
      };
      this.auth.capNhap(userUpdate).subscribe(
        (res) => {
          Swal.fire("", "Cập nhập mật khẩu thành công", "success");
          this.formUpdatePass.reset();
        },
        (err) => {
          Swal.fire("", `${err.error}`, "warning");
        }
      );
    }
  }

  capNhap(value) {
    this.formUpdate.markAllAsTouched();
    if (this.formUpdate.invalid) {
      return;
    }
    const userUpdate = {
      ...this.currentUser,
      hoTen: value.hoTen,
      soDt: value.soDt,
    };
    this.auth
      .capNhap(userUpdate)
      .subscribe((res) =>
        Swal.fire("", "Cập nhập thông tin thành công", "success")
      ),
      (err) => {
        Swal.fire("", `${err.error}`, "warning");
      };
  }

  ngOnInit(): void {}
}
