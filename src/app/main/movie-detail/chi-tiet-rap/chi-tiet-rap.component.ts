import {
  Component,
  HostListener,
  Input,
  OnChanges,
  OnInit,
} from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "src/app/core/services/authentication.service";

@Component({
  selector: "app-chi-tiet-rap",
  templateUrl: "./chi-tiet-rap.component.html",
  styleUrls: ["./chi-tiet-rap.component.scss"],
})
export class ChiTietRapComponent implements OnInit, OnChanges {
  @Input() chiTietRap: any[] = []; //Lấy hệ thống rạp chiếu theo phim
  @Input() cumRapChieu: any[] = []; //Lấy các rạp đầu tiên để active mặc định
  @Input() chiTietPhim; //Chi tiết phim
  lichChieu: any[] = []; //gồm ngày và giờ
  ngayChieu: any[] = [];
  gioChieu: any[] = [];
  maRap: string = ""; //Để thay đổi màu, font khi chọn rạp khác
  indexActiveCumRap = 0; //Active cụm rạp đầu tiên
  indexActive = 0; //Active rạp đầu tiên
  ngayActive = 0;
  currentUser: any = {};
  currentWindowWidth: number;
  @HostListener("window: resize")
  onResize() {
    this.currentWindowWidth = window.innerWidth;
  }

  changeCumRapIndex(index) {
    //active cụm rạp đc chọn
    this.indexActiveCumRap = index;
  }

  changeIndex(index) {
    //active rạp chọn
    this.indexActive = index;
  }

  changeNgayActive(value) {
    this.ngayActive = value;
  }

  changeRapChieu(value) {
    //value: maHeThongRap chọn
    //Thay đổi các thông số khi thay đổi hệ thống
    this.chiTietRap.forEach((rapItem) => {
      if (rapItem.maHeThongRap === value) {
        this.lichChieu = []; //Reset lại mảng lichChieu khi chọn rạp khác
        this.maRap = rapItem.maHeThongRap; //Thay đổi active hệ thống rạp
        this.cumRapChieu = rapItem.cumRapChieu; //Thay đổi mảng cụm rap chiếu theo rạp
        this.lichChieu = this.cumRapChieu[0].lichChieuPhim; //Lịch chiếu thể hiện phần tử đầu tiên của mảng
        this.setNgayChieu(); //set lại ngày giờ chiếu
      }
    });
  }

  changeLichChieu(value) {
    //Thay đổi lịch chiếu khi thay đổi cụm rạp
    this.cumRapChieu.forEach((cumItem) => {
      console.log("cumItem", cumItem);
      if (cumItem.maCumRap === value) {
        this.lichChieu = []; //Xét lại lịch chiếu bằng rỗng để xóa những lịch chiếu trước
        this.lichChieu = cumItem.lichChieuPhim;
        this.setNgayChieu();
      }
    });
  }

  // 2 hàm set lại ngày và giờ chiếu
  setNgayChieu() {
    this.ngayChieu = []; //Set ngày chiếu về rỗng
    for (let i = 0; i < this.lichChieu.length; i++) {
      this.ngayChieu.push(this.lichChieu[i].ngayChieuGioChieu.split("T")[0]); //push vào mảng ngayChieu ngày chiếu từ lịch chiếu
    }
    this.ngayChieu = this.ngayChieu.filter(
      (item, index) => this.ngayChieu.indexOf(item) == index // Xóa phần tử những ngày chiếu lặp nhau
    );
    this.indexActiveCumRap = 0;
    this.ngayActive = 0;
    this.setGioChieu(this.ngayChieu[0]); // Set lại giờ chiếu hiển thị là ngày chiếu đầu tiền trong mảng
  }

  setGioChieu(value) {
    //Giờ chiếu sẽ lấy mảng lichChieuPhim có thuộc tính như dưới để lấy giá trị maLichChieu và gọi api
    this.gioChieu = this.lichChieu.filter(
      (item) => item.ngayChieuGioChieu.split("T")[0] == value
    ); //Lọc giờ chiếu theo ngày
  }

  changeTime(value) {
    this.setGioChieu(value);
  }

  datVe(maLichChieu) {
    if (this.currentUser.taiKhoan) {
      this.router.navigate([`/datve/${maLichChieu}`]);
    } else {
      alert("Vui lòng đăng nhập");
      this.router.navigate(["/"]);
    }
  }

  constructor(private auth: AuthenticationService, private router: Router) {}

  ngOnInit(): void {
    this.currentWindowWidth = window.innerWidth;
    this.maRap = this.chiTietRap[0].maheThongRap; //Chọn hệ thống active lần đầu
    this.lichChieu = this.cumRapChieu[0].lichChieuPhim;
    this.setNgayChieu();
    this.auth.currentUser.subscribe((res) => (this.currentUser = res));
  }

  ngOnChanges(): void {
    // this.maRap = this.chiTietRap[0].maheThongRap; //Chọn hệ thống active lần đầu
    // this.setNgayChieu();
    // this.auth.currentUser.subscribe((res) => (this.currentUser = res));
  }
}
