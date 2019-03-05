import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

import {Tour} from './shared/tour';
import {VacantDate} from './shared/vacant-date';
import {Order} from './shared/order';

import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TourService {
  source: string = '//localhost:8080/';
  getToursUrl: string = this.source + 'tours';
  getTourUrl: string = this.source + 'tour/';
  createTourUrl: string = this.source + 'create-tour';
  updateTourUrl: string = this.source + 'update-tour/';
  deleteTourUrl: string = this.source + 'delete-tour/';
  switchTourVisibilityUrl: string = this.source + 'switch-tour-visibility/';
  getVacantDatesUrl: string = this.source + 'vacant-dates/';
  getVacantDateUrl: string = this.source + 'vacant-date/';
  getAllVacantDatesUrl: string = this.source + 'all-vacant-dates/';
  createVacantDateUrl: string = this.source + 'create-vacant-date';
  updateVacantDateUrl: string = this.source + 'update-vacant-date/';
  deleteVacantDateUrl: string = this.source + 'delete-vacant-date/';
  changeStatusVacantDateUrl: string = this.source + 'change-status-vacant-date/';
  getOrdersUrl: string = this.source + 'orders';
  getOrdersByTourIdUrl: string = this.source + 'orders/';
  createOrderUrl: string = this.source + 'create-order';
  deleteOrderUrl: string = this.source + 'delete-order/';
  confirmOrderUrl: string = this.source + 'confirmation/';
  cancelOrderConfirmationUrl: string = this.source + 'cancel-confirmation/';

  constructor(private route: ActivatedRoute,
              private http: HttpClient) { }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.getOrdersUrl, httpOptions)
                    .pipe(catchError(this.handleError));
  }

  getOrdersByTourId(id: number): Observable<Order[]> {
    return this.http.get<Order[]>(this.getOrdersByTourIdUrl + id, httpOptions)
                    .pipe(catchError(this.handleError));
  }

  createOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.createOrderUrl, order, httpOptions)
                    .pipe(catchError(this.handleError));
  }

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

  getTours(): Observable<Tour[]> {
    return this.http.get<Tour[]>(this.getToursUrl, httpOptions)
                    .pipe(catchError(this.handleError));
  }

  getTour(id: number): Observable<Tour> {
    return this.http.get<Tour>(this.getTourUrl + id, httpOptions)
                    .pipe(catchError(this.handleError));
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

  getVacantDate(id: number): Observable<VacantDate> {
    return this.http.get<VacantDate>(this.getVacantDateUrl + id, httpOptions)
                    .pipe(catchError(this.handleError));
  }

  getVacantDates(id: number): Observable<VacantDate[]> {
    return this.http.get<VacantDate[]>(this.getVacantDatesUrl + id, httpOptions)
                    .pipe(catchError(this.handleError));
  }

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
      'Something bad happened; please try again later.');
  };
}
