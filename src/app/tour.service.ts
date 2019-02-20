import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TourService {
  toursUrl: string = '//localhost:8080/tours';
  tours: Tour[];

  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getTours(): Observable<Tour[]> {
      return this.http.get<Tour[]>(this.toursUrl);
  }

//  getVacationTours(tour: Tour){
//      const url = `${this.toursUrl}/${tour.id}`;
//      return this.http.post<any>(url, tour, this.httpOptions)
//      .pipe(
//          catchError(this.handleError('add tour'))
//      );
//  }
}
