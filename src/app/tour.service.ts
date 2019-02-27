import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

import {Tour} from './shared/tour';
import {VacantTour} from './shared/vacant-tour';

import {Observable} from 'rxjs';
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
  source: string = '//localhost:8080/';
  getToursUrl: string = this.source + 'tours';
  getTourUrl: string = this.source + 'tour/';
  getVacantTourUrl: string = this.source + 'vacant-tour/';
  getVacantToursUrl: string = this.source + 'vacant-tours/';
  getAllVacantToursUrl: string = this.source + 'all-vacant-tours/';
  createTourUrl: string = this.source + 'create-tour';
  updateTourUrl: string = this.source + 'update-tour/';
  deleteTourUrl: string = this.source + 'delete-tour/';

  constructor(private http: HttpClient) {
  }

  getTours(): Observable<Tour[]> {
    return this.http.get<Tour[]>(this.getToursUrl, httpOptions);
  }

  getTour(id: number): Observable<Tour> {
    let url = this.getTourUrl + id;
    return this.http.get<Tour>(url, httpOptions);
  }

  getVacantTour(id: number): Observable<VacantTour> {
    let url = this.getVacantTourUrl + id;
    return this.http.get<VacantTour>(url, httpOptions);
  }

  getVacantTours(id: number): Observable<VacantTour[]> {
    let url = this.getVacantToursUrl + id;
    return this.http.get<VacantTour[]>(url, httpOptions);
  }

  getAllVacantTours(id: number): Observable<VacantTour[]> {
      let url = this.getAllVacantToursUrl + id;
      return this.http.get<VacantTour[]>(url, httpOptions);
  }

  createTour(tour: Tour): Observable<Tour> {
      return this.http.post<Tour>(this.createTourUrl, tour, httpOptions);
  }

  updateTour(tour: Tour): Observable<Tour> {
    let url = this.updateTourUrl + tour.id;
    return this.http.put<Tour>(url, tour, httpOptions);
  }

  deleteTour(id: number) : Observable<{}> {
    let url = this.deleteTourUrl + id;
    return this.http.delete(url, httpOptions);
  }

  createVacantTour(vacantTour: VacantTour){
    alert('create vacant tour');
  }

  deleteVacantTour(vacId: number){
    alert('delete vacant tour');
  }

//  getVacantTours(tour: Tour){
//      const url = `${this.toursUrl}/${tour.id}`;
//      return this.http.post<any>(url, tour, this.httpOptions)
//      .pipe(
//          catchError(this.handleError('add tour'))
//      );
//  }
}
