import { Component, OnInit } from '@angular/core';
import { AdminLoginService } from '../../services/admin-login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  loggedIn$ = false;

  constructor(private adminLoginService: AdminLoginService) { }

  ngOnInit(): void {
    this.loggedIn$ = this.adminLoginService.isLoggedIn();
    console.log(this.loggedIn$);
  }

  logOut() {
    this.adminLoginService.logOut();
  }

}
