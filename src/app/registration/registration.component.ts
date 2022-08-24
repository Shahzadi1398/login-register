import { Router } from '@angular/router';
import { RegistrationService } from './../registration.service';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user = new User();
  msg='';

  constructor(private service: RegistrationService, private route: Router) { }

  ngOnInit(): void {
  }

  registerUser(){
    this.service.registerUserFromRemote(this.user).subscribe(
      data =>{
        this.route.navigate(['/login'])  
      }, error =>{
        this.msg=error.error;
      }
    )
  }

}
