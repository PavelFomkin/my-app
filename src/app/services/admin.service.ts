import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

import {Tour} from '../shared/tour';
import {VacantDate} from '../shared/vacant-date';
import {Order} from '../shared/order';

import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {TourService} from './tour.service';

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
              private tourService: TourService) { }

  // Orders
  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.getOrdersUrl, httpOptions)
                    .pipe(catchError(this.handleError));
  }
  // getOrdersByTourId(id: number): Observable<Order[]> {
  //   return this.http.get<Order[]>(this.getOrdersByTourIdUrl + id, httpOptions)
  //                   .pipe(catchError(this.handleError));
  // }
  deleteOrder(orderId: number): Observable<{}> {
    return this.http.delete(this.deleteOrderUrl + orderId, httpOptions)
                    .pipe(catchError(this.handleError));
  }
  confirmOrder(orderId: number): Observable<Order> {
    return this.http.get<Order>(this.confirmOrderUrl + orderId, httpOptions)
                    .pipe(catchError(this.handleError));
  }
  cancelOrderConfirmation(orderId: number): Observable<Order> {
    return this.http.get<Order>(this.cancelOrderConfirmationUrl + orderId, httpOptions)
                    .pipe(catchError(this.handleError));
  }

  // Tours
  getTours(): Observable<Tour[]> {
    return this.tourService.getTours();
  }
  getTour(id: number): Observable<Tour> {
    return this.tourService.getTour(id);
  }
  createTour(tour: Tour): Observable<Tour> {
      return this.http.post<Tour>(this.createTourUrl, tour, httpOptions)
                      .pipe(catchError(this.handleError));
  }
  updateTour(tour: Tour): Observable<Tour> {
    return this.http.put<Tour>(this.updateTourUrl + tour.id, tour, httpOptions)
                    .pipe(catchError(this.handleError));
  }
  deleteTour(id: number): Observable<{}> {
    return this.http.delete(this.deleteTourUrl + id, httpOptions)
                    .pipe(catchError(this.handleError));
  }
  switchTourVisibility(id: number): Observable<Tour> {
    return this.http.get<Tour>(this.switchTourVisibilityUrl + id, httpOptions)
                    .pipe(catchError(this.handleError));
  }

  // Vacant dates
  getAllVacantDates(id: number): Observable<VacantDate[]> {
      return this.http.get<VacantDate[]>(this.getAllVacantDatesUrl + id, httpOptions)
                      .pipe(catchError(this.handleError));
  }
  saveVacantDate(vacantDate: VacantDate): Observable<VacantDate> {
    if(vacantDate.id === undefined){
      return this.createVacantDate(vacantDate);
    } else {
      return this.updateVacantDate(vacantDate);
    }
  }
  createVacantDate(vacantDate: VacantDate): Observable<VacantDate> {
    return this.http.post<VacantDate>(this.createVacantDateUrl, vacantDate, httpOptions)
                    .pipe(catchError(this.handleError));
  }
  updateVacantDate(vacantDate: VacantDate): Observable<VacantDate> {
    return this.http.put<VacantDate>(this.updateVacantDateUrl + vacantDate.id, vacantDate, httpOptions)
                    .pipe(catchError(this.handleError));
  }
  deleteVacantDate(vacId: number): Observable<{}> {
    return this.http.delete(this.deleteVacantDateUrl + vacId, httpOptions)
                    .pipe(catchError(this.handleError));
  }
  changeStatusVacantDate(vacantDate: VacantDate): Observable<VacantDate>{
    return this.http.get<VacantDate>(this.changeStatusVacantDateUrl + vacantDate.id, httpOptions)
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
      'You have no access to this page.');
  };
}
