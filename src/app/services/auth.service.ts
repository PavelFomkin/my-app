import { Injectable } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../shared/user';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'Origin, X-Requested-With, Content-Type, Accept'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  source: string = '//localhost:8080/';
  loginUrl: string = this.source + 'login';

  constructor(private route: ActivatedRoute,
              private http: HttpClient) { }

  sendToken(token: string) {
    localStorage.setItem("LoggedInUser", token)
  }

  getToken() {
    return localStorage.getItem("LoggedInUser")
  }

  isLoggednIn() {
    // alert('isLoggedIn()');
  console.log(this.getToken());
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem("LoggedInUser");
    // this.route.navigate([""]);
  }

  login(user: User): Observable<string> {
    return this.http.post<string>(this.loginUrl, user, httpOptions);
  }
}
