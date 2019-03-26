import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

import {Tour} from '../shared/tour';
import {VacantDate} from '../shared/vacant-date';
import {Order} from '../shared/order';

import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class TourService {
  source: string = '//localhost:8080/';
  getToursUrl: string = this.source + 'available-tours';
  getTourUrl: string = this.source + 'available-tours/';
  getVacantDatesUrl: string = this.source + 'vacant-dates/';
  getVacantDateUrl: string = this.source + 'vacant-date/';
  createOrderUrl: string = this.source + 'create-order';

  constructor(private route: ActivatedRoute,
              private http: HttpClient) { }

  createOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.createOrderUrl, order, httpOptions)
                    .pipe(catchError(this.handleError));
  }

  getTours(): Observable<Tour[]> {
    return this.http.get<Tour[]>(this.getToursUrl, httpOptions)
                    .pipe(catchError(this.handleError));
  }

  getTour(id: number): Observable<Tour> {
    return this.http.get<Tour>(this.getTourUrl + id, httpOptions)
                    .pipe(catchError(this.handleError));
  }

  getVacantDate(id: number): Observable<VacantDate> {
    return this.http.get<VacantDate>(this.getVacantDateUrl + id, httpOptions)
                    .pipe(catchError(this.handleError));
  }

  getVacantDates(id: number): Observable<VacantDate[]> {
    return this.http.get<VacantDate[]>(this.getVacantDatesUrl + id, httpOptions)
                    .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened, please try again later.');
  };
}
