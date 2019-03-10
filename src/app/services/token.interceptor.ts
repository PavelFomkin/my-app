import { Injectable } from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class TokenInterceptor implements HttpInterceptor {
//   constructor(public auth: AuthService) {}
//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     if (this.auth.isLoggednIn()) {
//       // Logged in. Add Bearer token.
//       return next.handle(
//         request.clone({
//           headers: request.headers.append('Authorization', 'Bearer ' + localStorage.getItem('LoggedInUser'))
//         })
//       );
//     }
//     return next.handle(request);
//   }
// }
