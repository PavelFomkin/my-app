import { Component, OnInit } from '@angular/core';
import {Tour} from '../shared/tour';
import {VacantDate} from '../shared/vacant-date';
import {TourService} from '../services/tour.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-tour-info',
  templateUrl: './tour-info.component.html',
  styleUrls: ['./tour-info.component.css']
})
export class TourInfoComponent implements OnInit {
  error: any;
  tour: Tour = new Tour('');
  vacantDates: VacantDate[] = [];

  constructor(private route: ActivatedRoute,
              private tourService: TourService,
              private location: Location) { }

  ngOnInit() {
    this.getTour();
  }

  getTour() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.tourService.getTour(id)
                    .subscribe(tour => {
                                this.tour = tour;
                                this.getVacantDates(tour.id);
                              },
                              error => this.error = error);
  }

  getVacantDates(id: number) {
    this.tourService.getVacantDates(id).subscribe(vacantDates => this.vacantDates = vacantDates);
  }

  goBack() {
    this.location.back();
  }
}
