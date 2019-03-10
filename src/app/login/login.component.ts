import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import {User} from '../shared/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User('','');

  constructor(private router: Router,
              private auth: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.auth.login(this.user).subscribe(token => {
      alert(token);
      this.auth.sendToken(token);
      this.router.navigate(['']);
    });
  }
}
