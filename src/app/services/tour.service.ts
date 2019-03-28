import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

import {Tour} from '../entity/tour';
import {VacantDate} from '../entity/vacant-date';
import {Order} from '../entity/order';

import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from './auth.service';
import {ErrorHandle} from './error-handle';

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
              private http: HttpClient,
              private errorHandle: ErrorHandle) { }

  createOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.createOrderUrl, order, httpOptions)
                    .pipe(catchError(err => this.errorHandle.handleError(err)));
  }

  getTours(): Observable<Tour[]> {
    return this.http.get<Tour[]>(this.getToursUrl, httpOptions)
                    .pipe(catchError(err => this.errorHandle.handleError(err)));
  }

  getTour(id: number): Observable<Tour> {
    return this.http.get<Tour>(this.getTourUrl + id, httpOptions)
                    .pipe(catchError(err => this.errorHandle.handleError(err)));
  }

  getVacantDate(id: number): Observable<VacantDate> {
    return this.http.get<VacantDate>(this.getVacantDateUrl + id, httpOptions)
                    .pipe(catchError(err => this.errorHandle.handleError(err)));
  }

  getVacantDates(id: number): Observable<VacantDate[]> {
    return this.http.get<VacantDate[]>(this.getVacantDatesUrl + id, httpOptions)
                    .pipe(catchError(err => this.errorHandle.handleError(err)));
  }
}
