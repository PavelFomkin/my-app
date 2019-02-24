import {Component, OnInit} from '@angular/core';
import {VacationTour} from '../shared/vacation-tour';
import {ActivatedRoute} from '@angular/router';
import {TourService} from '../tour.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  vacationTour: VacationTour;

  constructor(
    private route: ActivatedRoute,
    private tourService: TourService,
    private location: Location
  ) {
  }

  ngOnInit() {
    this.getTour();
  }

  getTour(): void {
    const id = +this.route.snapshot.paramMap.get('vacId');
    this.tourService.getVacationTour(id)
      .subscribe(vacationTours => this.vacationTour = vacationTours[0]); // TODO: it's for testing rout
  }

  goBack(): void {
    this.location.back();
  }
}
