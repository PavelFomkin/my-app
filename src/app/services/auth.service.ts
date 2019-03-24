import { Injectable } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {User} from '../shared/user';
import {Observable} from 'rxjs';

import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  source: string = '//localhost:8080/';
  loginUrl: string = this.source + 'login';

  constructor(private route: ActivatedRoute,
              private http: HttpClient,
              private router: Router) { }

  isLoggedIn() {
    console.log(localStorage.getItem('Token'));
    return localStorage.getItem('Token') !== null;
  }

  logout() {
    localStorage.removeItem('Token');
    this.router.navigate(['/']);
  }

  login(user: User): Observable<HttpResponse<Object>> {
    const headers = {
      'Content-Type': 'application/json'
    };
    return this.http.post(this.loginUrl, user, { headers: headers, observe: 'response' })
      .pipe(map(resp => {
        localStorage.setItem('Token',resp.headers.get('Authorization'));
        return resp;
      }));
  }
}

