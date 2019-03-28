import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {throwError} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandle {

  constructor(private router: Router,
              private auth: AuthService ) { }

  handleError(errorResponse: HttpErrorResponse) {
    switch (errorResponse.status) {
      case 404: {
        console.error('Page not found.');
        this.router.navigate(["/error"])
        break;
      }
      case 403: {
        console.error('Token is expired.');
        this.auth.logout();
        break;
      }
      default: {
        console.error(
          `Backend returned code ${errorResponse.status}, ` +
          `body was: ${errorResponse.error}`);
      }
    }
    return throwError('You have no access to this page.');
  }
}
