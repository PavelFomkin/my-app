import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

import {Tour} from './shared/tour';
import {Observable} from 'rxjs';
import {VacationTour} from './shared/vacation-tour';
import {log} from 'util';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TourService {
  toursUrl: string = '//localhost:8080/tours';
  tourUrl: string = '//localhost:8080/tour';

  constructor(private http: HttpClient) {
  }

  getTours(): Observable<Tour[]> {
    return this.http.get<Tour[]>(this.toursUrl, httpOptions);
  }

  getVacationTour(id: number): Observable<VacationTour[]> {
    let url = this.toursUrl + "/" + id;
    return this.http.get<VacationTour[]>(url, httpOptions);
  }

  getTour(id: number): Observable<Tour> {
    let url = this.tourUrl + "/" + id;
    return this.http.get<Tour>(url, httpOptions);
  }

  saveTour(tour: Tour): void {
    alert('great');
  }

//  getVacationTours(tour: Tour){
//      const url = `${this.toursUrl}/${tour.id}`;
//      return this.http.post<any>(url, tour, this.httpOptions)
//      .pipe(
//          catchError(this.handleError('add tour'))
//      );
//  }
}
