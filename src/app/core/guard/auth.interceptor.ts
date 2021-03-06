import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const userInfo = localStorage.getItem("userInfo");
    const adminInfo = localStorage.getItem("adminInfo");
    let requestClone = request;
    if (userInfo) {
      const accessToken = JSON.parse(userInfo).accessToken;
      requestClone = request.clone({
        headers: request.headers.set("Authorization", `Bearer ${accessToken}`),
      });
    }
    if (adminInfo) {
      const accessToken = JSON.parse(adminInfo).accessToken;
      requestClone = request.clone({
        headers: request.headers.set("Authorization", `Bearer ${accessToken}`),
      });
    }
    return next.handle(requestClone);
  }
}
