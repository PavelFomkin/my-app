import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private myRoute: Router,
              private auth: AuthService) { }

  ngOnInit() {
  }

  login() {
    if (this.valid()) {
      this.auth.sendToken(this.email)
      this.myRoute.navigate([""]);
    }
  }

  private valid(){
    return true;
  }
}
