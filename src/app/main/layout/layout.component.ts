import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "src/app/core/services/authentication.service";
import { UserService } from "src/app/core/services/user.service";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"],
})
export class LayoutComponent implements OnInit {
  constructor(private auth: AuthenticationService, private user: UserService) {}

  ngOnInit(): void {
    this.auth.inItCurrentUser();
    this.user.initAvatarUser();
  }
}
