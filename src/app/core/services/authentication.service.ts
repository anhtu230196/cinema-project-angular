import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  private currentUserSubject = new BehaviorSubject({});
  private currentAdminSubject = new BehaviorSubject(null);
  currentUser = this.currentUserSubject.asObservable();
  currentAdmin = this.currentAdminSubject.asObservable();

  constructor(private http: HttpClient) {}

  inItCurrentUser() {
    const user = localStorage.getItem("userInfo");
    if (user) {
      this.currentUserSubject.next(JSON.parse(user));
    }
  }
  inItCurrentAdmin() {
    const admin = localStorage.getItem("adminInfo");
    if (admin) {
      this.currentAdminSubject.next(JSON.parse(admin));
    }
  }
}
