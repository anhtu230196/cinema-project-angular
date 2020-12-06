import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { AuthenticationService } from "src/app/core/services/authentication.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  @ViewChild("helloUser") ShowLogOut: ElementRef;
  @Output() ShowLogin = new EventEmitter();
  active: string;
  isLogin: boolean = false;
  isToggle: boolean = false;
  isInfo: boolean = false; //Tắt component đăng nhập
  currentUser: any = {};

  toggle() {
    this.isToggle = !this.isToggle;
  }

  constructor(private auth: AuthenticationService) {}

  changeActive(value: string) {
    this.isInfo = false;
  }

  thongTinUser() {
    this.isInfo = false;
  }

  showLogin() {
    //Ẩn hiện khi click vào đăng nhập
    this.isLogin = !this.isLogin;
    this.ShowLogin.emit(this.isLogin);
  }
  logOut() {
    localStorage.removeItem("userInfo");
    this.isLogin = false;
    this.currentUser = {};
  }

  ngOnInit(): void {
    this.auth.currentUser.subscribe((res) => (this.currentUser = res));
  }
}
