import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthenticationService } from "src/app/core/services/authentication.service";
import { GheService } from "src/app/core/services/ghe.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-trang-dat-ve",
  templateUrl: "./trang-dat-ve.component.html",
  styleUrls: ["./trang-dat-ve.component.scss"],
})
export class TrangDatVeComponent implements OnInit {
  @ViewChild("openmodal") openModal: ElementRef;

  danhSachGhe: any[];
  thongTinPhim: any;
  gheDangChon: any[] = [];
  tienVe: number = 0;
  tienCombo: number = 0;
  isCombo: boolean = false; //show-hide combo
  isWarning: boolean; // show-hide warning
  isThanhToan: boolean = false; // show-hide button mua vé (ở màn đt)
  isConfirm: boolean; // show hide button đặt ghế (ở màn đt)
  mangDatVe: any = {};
  leftTime: number = 300; // Thời gian count down
  currentWidth: number;
  currentHeight: number;
  currentUser: any;
  mangCombo: any[] = [
    {
      id: "combo1",
      ten: "Bắp + Coca",
      soLuong: 0,
      img: "../../../assets/img/combo1.png",
      gia: 75000,
      thanhTien: 0,
    },
    {
      id: "combo2",
      ten: "Bắp + 2 Coca",
      soLuong: 0,
      img: "../../../assets/img/combo2.png",
      gia: 85000,
      thanhTien: 0,
    },
  ];

  @HostListener("window:resize")
  onResize() {
    this.currentWidth = window.innerWidth;
    this.currentHeight = window.innerHeight;
    if (this.currentWidth > 420) {
      // màn lớn hươn 420 --> hiển thị button mua vé , hide button đặt ghế
      this.isThanhToan = true;
      this.isConfirm = true;
    } else {
      // màn nhỏ hươn 420 --> hiển thị button đặt ghế , hide button mua vé
      this.isThanhToan = false;
      this.isConfirm = false;
    }
  }

  constructor(
    public router: Router,
    private auth: AuthenticationService,
    private ghe: GheService,
    private activatedRoute: ActivatedRoute
  ) {}

  datCombo(id: string, value: boolean) {
    //đặt combo
    this.mangCombo.forEach((combo) => {
      if (combo.id === id) {
        if (value) {
          combo.soLuong += 1;
        } else {
          if (combo.soLuong == 0) {
            return;
          } else {
            combo.soLuong -= 1;
          }
        }
        combo.thanhTien = combo.soLuong * combo.gia;
      }
    });
    this.tienCombo = this.mangCombo.reduce((tienCombo, comboItem, index) => {
      return (tienCombo += comboItem.thanhTien);
    }, 0);
  }

  combo() {
    this.isCombo = !this.isCombo; //toggle combo view
  }

  closeCombo() {
    this.isCombo = false; //close combo view
  }

  datGhe(ghe) {
    if (ghe.daDat) {
      this.gheDangChon.push(ghe);
      this.gheDangChon.sort((a, b) => a.tenGhe - b.tenGhe);
    } else {
      let index = this.gheDangChon.findIndex(
        (itemGhe) => itemGhe.tenGhe === ghe.tenGhe
      );
      this.gheDangChon.splice(index, 1);
    }
    this.tienVe = this.gheDangChon.reduce((tienVe, gheItem, index) => {
      return (tienVe += gheItem.giaVe);
    }, 0);
  }

  datVe() {
    Swal.fire("Any fool can use a computer");
    let xacNhan = confirm("Xác nhận đặt vé ?");
    if (!xacNhan) {
      return;
    } else {
      if (this.currentUser.taiKhoan) {
        this.mangDatVe = {
          maLichChieu: this.thongTinPhim.maLichChieu,
          danhSachVe: this.gheDangChon,
          taiKhoanNguoiDung: this.currentUser.taiKhoan,
        };
        this.ghe.datVe(this.mangDatVe).subscribe({
          next: (res) => {
            this.router.navigate(["/"]);
            alert("Đặt vé thành công");
          },
        });
      }
    }
  }

  datVeBuoc1() {
    this.isConfirm = true;
  }

  ngOnInit(): void {
    this.currentHeight = window.innerHeight;
    this.currentWidth = window.innerWidth;
    if (this.currentWidth > 420) {
      this.isThanhToan = true;
      this.isConfirm = true;
    } else {
      this.isThanhToan = false;
      this.isConfirm = false;
    }
    this.auth.currentUser.subscribe({
      next: (data) => {
        if (data) {
          this.currentUser = data;
        }
      },
    });

    this.activatedRoute.params.subscribe({
      next: (params) => {
        this.ghe.layDanhSachPhongVe(params.maLichChieu).subscribe((res) => {
          this.danhSachGhe = res.danhSachGhe;
          this.thongTinPhim = res.thongTinPhim;
        });
      },
    });
  }
}
