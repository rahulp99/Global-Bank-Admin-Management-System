import { Component } from '@angular/core';
import { AdminLoginService } from './services/admin-login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Global Admin Management System';
  loggedIn$ = false;
  
    constructor(
      private authService: AdminLoginService
  ) { }
    
  ngOnInit() {
    this.loggedIn$ = this.authService.isLoggedIn();
    }
}
