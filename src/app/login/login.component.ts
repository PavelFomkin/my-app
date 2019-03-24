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
  error = '';

  constructor(private router: Router,
              private auth: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.auth.login(this.user)
      .subscribe(() => {
        this.router.navigate(['/']);
      }, error => {
        this.error = 'Username or password is incorrect';
    });
  }
}
