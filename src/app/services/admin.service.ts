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
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  source: string = '//localhost:8080/';
  getToursUrl: string = this.source + 'tours';
  getTourUrl: string = this.source + 'tours/';
  createTourUrl: string = this.source + 'create-tour';
  updateTourUrl: string = this.source + 'update-tour/';
  deleteTourUrl: string = this.source + 'delete-tour/';
  switchTourVisibilityUrl: string = this.source + 'switch-tour-visibility/';
  getAllVacantDatesUrl: string = this.source + 'all-vacant-dates/';
  createVacantDateUrl: string = this.source + 'create-vacant-date';
  updateVacantDateUrl: string = this.source + 'update-vacant-date/';
  deleteVacantDateUrl: string = this.source + 'delete-vacant-date/';
  changeStatusVacantDateUrl: string = this.source + 'change-status-vacant-date/';
  getOrdersUrl: string = this.source + 'orders';
  // getOrdersByTourIdUrl: string = this.source + 'orders/';
  deleteOrderUrl: string = this.source + 'delete-order/';
  confirmOrderUrl: string = this.source + 'confirmation/';
  cancelOrderConfirmationUrl: string = this.source + 'cancel-confirmation/';

  constructor(private route: ActivatedRoute,
              private http: HttpClient,
              private auth: AuthService,
              private router: Router,
              private errorHandle: ErrorHandle) { }

  // Orders
  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.getOrdersUrl, httpOptions)
                    .pipe(catchError(err => this.errorHandle.handleError(err)));
  }
  // getOrdersByTourId(id: number): Observable<Order[]> {
  //   return this.http.get<Order[]>(this.getOrdersByTourIdUrl + id, httpOptions)
  //                   .pipe(catchError(err => this.errorHandle.handleError(err)));
  // }
  deleteOrder(orderId: number): Observable<{}> {
    return this.http.delete(this.deleteOrderUrl + orderId, httpOptions)
                    .pipe(catchError(err => this.errorHandle.handleError(err)));
  }
  confirmOrder(orderId: number): Observable<Order> {
    return this.http.get<Order>(this.confirmOrderUrl + orderId, httpOptions)
                    .pipe(catchError(err => this.errorHandle.handleError(err)));
  }
  cancelOrderConfirmation(orderId: number): Observable<Order> {
    return this.http.get<Order>(this.cancelOrderConfirmationUrl + orderId, httpOptions)
                    .pipe(catchError(err => this.errorHandle.handleError(err)));
  }

  // Tours
  getTours(): Observable<Tour[]> {
    return this.http.get<Tour[]>(this.getToursUrl, httpOptions)
                    .pipe(catchError(err => this.errorHandle.handleError(err)));
  }
  getTour(id: number): Observable<Tour> {
    return this.http.get<Tour>(this.getTourUrl + id, httpOptions)
                    .pipe(catchError(err => this.errorHandle.handleError(err)));
  }
  createTour(tour: Tour): Observable<Tour> {
      return this.http.post<Tour>(this.createTourUrl, tour, httpOptions)
                      .pipe(catchError(err => this.errorHandle.handleError(err)));
  }
  updateTour(tour: Tour): Observable<Tour> {
    return this.http.put<Tour>(this.updateTourUrl + tour.id, tour, httpOptions)
                    .pipe(catchError(err => this.errorHandle.handleError(err)));
  }
  deleteTour(id: number): Observable<{}> {
    return this.http.delete(this.deleteTourUrl + id, httpOptions)
                    .pipe(catchError(err => this.errorHandle.handleError(err)));
  }
  switchTourVisibility(id: number): Observable<Tour> {
    return this.http.get<Tour>(this.switchTourVisibilityUrl + id, httpOptions)
                    .pipe(catchError(err => this.errorHandle.handleError(err)));
  }

  // Vacant dates
//  getAllVacantDates(id: number): Observable<VacantDate[]> {
//      return this.http.get<VacantDate[]>(this.getAllVacantDatesUrl + id, httpOptions)
//                      .pipe(catchError(err => this.errorHandle.handleError(err)));
//  }
//  saveVacantDate(vacantDate: VacantDate): Observable<VacantDate> {
//    if(vacantDate.id === undefined){
//      return this.createVacantDate(vacantDate);
//    } else {
//      return this.updateVacantDate(vacantDate);
//    }
//  }
//  createVacantDate(vacantDate: VacantDate): Observable<VacantDate> {
//    return this.http.post<VacantDate>(this.createVacantDateUrl, vacantDate, httpOptions)
//                    .pipe(catchError(err => this.errorHandle.handleError(err)));
//  }
//  updateVacantDate(vacantDate: VacantDate): Observable<VacantDate> {
//    return this.http.put<VacantDate>(this.updateVacantDateUrl + vacantDate.id, vacantDate, httpOptions)
//                    .pipe(catchError(err => this.errorHandle.handleError(err)));
//  }
//  deleteVacantDate(vacId: number): Observable<{}> {
//    return this.http.delete(this.deleteVacantDateUrl + vacId, httpOptions)
//                    .pipe(catchError(err => this.errorHandle.handleError(err)));
//  }
//  changeStatusVacantDate(vacantDate: VacantDate): Observable<VacantDate>{
//    return this.http.get<VacantDate>(this.changeStatusVacantDateUrl + vacantDate.id, httpOptions)
//                    .pipe(catchError(err => this.errorHandle.handleError(err)));
//  }
}
