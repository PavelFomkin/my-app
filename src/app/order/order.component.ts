import {Component, OnInit} from '@angular/core';
import {VacantTour} from '../shared/vacant-tour';
import {ActivatedRoute} from '@angular/router';
import {TourService} from '../tour.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  vacantTour: VacantTour = new VacantTour();

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
    this.tourService.getVacantTour(id).subscribe(vacantTour => this.vacantTour = vacantTour);
  }

  goBack(): void {
    this.location.back();
  }
}
