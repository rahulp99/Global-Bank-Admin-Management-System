import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminLoginService } from '../services/admin-login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private adminLoginService: AdminLoginService, private router: Router) { }

  ngOnInit(): void {
  }

  logOut(){
    this.adminLoginService.removeToken();
    this.router.navigateByUrl("/login");
  }

}
