import {Component, OnInit} from '@angular/core';

import {Tour} from '../shared/tour';
import {TourService} from '../tour.service';
import {VacantTour} from '../shared/vacant-tour';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class ToursComponent implements OnInit {
  title: string = 'List of tours';
  tours: Tour[] = [];
  currentTour: Tour;
  vacantToursOfCurrentTour: VacantTour[] = [];

  constructor(private tourService: TourService) {
  }

  ngOnInit() {
    this.getTours();
  }

  getTours() {
    this.tourService.getTours().subscribe(tours => this.tours = tours);
  }

  onClick(tour: Tour) {
    this.tourService.getVacantTours(tour.id)
                    .subscribe(vacantTours => {
                      this.currentTour = tour;
                      this.vacantToursOfCurrentTour = vacantTours;
                    });
  }

  goBack() {
    this.currentTour = null;
    this.vacantToursOfCurrentTour = null;
    return false;
  }
}
