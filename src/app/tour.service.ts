import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

import {Tour} from './shared/tour';
import {VacantTour} from './shared/vacant-tour';

import {Observable} from 'rxjs';

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
  getVacantToursUrl: string = this.source + 'vacant-tours/';
  getVacantTourUrl: string = this.source + 'vacant-tour/';
  getAllVacantToursUrl: string = this.source + 'all-vacant-tours/';
  createVacantTourUrl: string = this.source + 'create-vacant-tour';
  updateVacantTourUrl: string = this.source + 'update-vacant-tour/';
  deleteVacantTourUrl: string = this.source + 'delete-vacant-tour/';
  changeStatusVacantTourUrl: string = this.source + 'change-status-vacant-tour/';

  constructor(private http: HttpClient) {
  }

  getTours(): Observable<Tour[]> {
    return this.http.get<Tour[]>(this.getToursUrl, httpOptions);
  }

  getTour(id: number): Observable<Tour> {
    return this.http.get<Tour>(this.getTourUrl + id, httpOptions);
  }

  createTour(tour: Tour): Observable<Tour> {
      return this.http.post<Tour>(this.createTourUrl, tour, httpOptions);
  }

  updateTour(tour: Tour): Observable<Tour> {
    return this.http.put<Tour>(this.updateTourUrl + tour.id, tour, httpOptions);
  }

  deleteTour(id: number): Observable<{}> {
    return this.http.delete(this.deleteTourUrl + id, httpOptions);
  }

  switchTourVisibility(id: number): Observable<Tour> {
    return this.http.get<Tour>(this.switchTourVisibilityUrl + id, httpOptions);
  }

  getVacantTour(id: number): Observable<VacantTour> {
    return this.http.get<VacantTour>(this.getVacantTourUrl + id, httpOptions);
  }

  getVacantTours(id: number): Observable<VacantTour[]> {
    return this.http.get<VacantTour[]>(this.getVacantToursUrl + id, httpOptions);
  }

  getAllVacantTours(id: number): Observable<VacantTour[]> {
      return this.http.get<VacantTour[]>(this.getAllVacantToursUrl + id, httpOptions);
  }

  saveVacantTour(vacantTour: VacantTour): Observable<VacantTour> {
    if(vacantTour.id === undefined){
      return this.createVacantTour(vacantTour);
    } else {
      return this.updateVacantTour(vacantTour);
    }
  }

  createVacantTour(vacantTour: VacantTour): Observable<VacantTour> {
    return this.http.post<VacantTour>(this.createVacantTourUrl, vacantTour, httpOptions);
  }

  updateVacantTour(vacantTour: VacantTour): Observable<VacantTour> {
    return this.http.put<VacantTour>(this.updateVacantTourUrl + vacantTour.id, vacantTour, httpOptions);
  }

  deleteVacantTour(vacId: number): Observable<{}> {
    return this.http.delete(this.deleteVacantTourUrl + vacId, httpOptions);
  }

  changeStatusVacantTour(vacantTour: VacantTour): Observable<VacantTour>{
    return this.http.get<VacantTour>(this.changeStatusVacantTourUrl + vacantTour.id, httpOptions);
  }
}
