import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminLoginService } from 'src/app/services/admin-login.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  userValid: boolean = false;
  processing: Boolean = false;
  constructor(private adminLoginService: AdminLoginService, private router: Router) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    userName: new FormControl("", [Validators.required,]),
    pwd: new FormControl("",[Validators.required, Validators.minLength(6),Validators.maxLength(15)])
  });


  loginSubmitted(){
    console.log(this.loginForm);
    this.processing = true;
    this.adminLoginService.loginUser([this.loginForm.value.userName!,this.loginForm.value.pwd!]).subscribe(res=>{
      console.log(res);
      if(res=='Failure'){
        this.userValid = false;
      } else{
        this.userValid = true;
        this.adminLoginService.setToken(res);
        this.router.navigateByUrl("dashboard");
      }
    });
  }

  

  get userNameGet(): FormControl {
    return this.loginForm.get("userName") as FormControl;
  }

  get pwdGet(): FormControl{
    return this.loginForm.get("pwd") as FormControl;
  }
}
