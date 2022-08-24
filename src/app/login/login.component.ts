import { RegistrationService } from './../registration.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  msg = '';

  constructor(private service: RegistrationService, private route: Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    this.service.loginUserFromRemote(this.user).subscribe(
      data => {
        console.log("Response recieved");
        this.route.navigate(['/loginsuccess'])    
    },
      error=> {
        console.log ("Exception occured");
        this.msg="Bad Credentials, please enter valid email and password";
      }
    );

  }
   
  gotoregistration(){
    this.route.navigate(['/registration'])
  }

}
