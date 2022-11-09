import { Component, OnInit } from '@angular/core';
import { AdminLoginService } from 'src/app/services/admin-login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navToggle: Boolean = false;
  constructor(private adminLoginService: AdminLoginService) { }

  ngOnInit(): void {
  }

  logOut() {
    this.adminLoginService.logOut();
  }

  toggleNav() {
    this.navToggle  = !this.navToggle;
  }

}
