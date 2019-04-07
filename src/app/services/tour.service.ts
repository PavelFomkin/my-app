import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

import {Tour} from '../entity/tour';
import {VacantDate} from '../entity/vacant-date';
import {Order} from '../entity/order';

import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {ErrorHandle} from './error-handle';
import {Calendar} from '../entity/calendar';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class TourService {
  source: string = '//localhost:8080/';
  getToursUrl: string = this.source + 'available-tours';
  getTourUrl: string = this.source + 'available-tours/';
  getDisableDatesUrl: string = this.source + 'disabled-dates';
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

  getCalendarDisableDates(): Observable<Date[]> {
    return this.http.get<Date[]>(this.getDisableDatesUrl, httpOptions)
      .pipe(catchError(err => this.errorHandle.handleError(err)));
  }

  // getCalendarDisableDates(year: number, month: number): Observable<Date[]> {
  //   const params = {
  //     year: year.toString(),
  //     month: month.toString()
  //   };
  //   return this.http.get<Date[]>(this.source + 'disabled-dates', { headers: httpOptions.headers, params: params })
  //     .pipe(catchError(err => this.errorHandle.handleError(err)));
  // }
}
