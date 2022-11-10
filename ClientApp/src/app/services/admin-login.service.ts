import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, using } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  constructor(private http: HttpClient, private router: Router) { }

  baseServerUrl = "https://localhost:7282/api/";
  jwtHelperService = new JwtHelperService();
  currentUser: BehaviorSubject<any> = new BehaviorSubject(null);

  loginUser(loginInfo: Array<string>) {
    return this.http.post(this.baseServerUrl + "Admin/Login", {
      UserName: loginInfo[0],
      Password: loginInfo[1]
    }, {
      responseType: 'text'
    })
  }

  setToken(token: string) {
    localStorage.setItem("access_token", token);
    this.loadCurrentUser();
  }

  loadCurrentUser() {
    const token = localStorage.getItem("access_token");
    const userInfo = token != null ? this.jwtHelperService.decodeToken(token) : null;
    const data = userInfo ? {
      id: userInfo.id,
      username: userInfo.userName
    } : null
    this.currentUser.next(data);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem("access_token") ? true : false;
  }

  removeToken() {
    localStorage.removeItem("access_token");
  }
  logOut() {
    this.removeToken();
    this.router.navigateByUrl("/login");
  }
}
