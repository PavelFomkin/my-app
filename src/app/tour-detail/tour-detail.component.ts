import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

import {TourService} from '../tour.service';
import {VacantTour} from '../shared/vacant-tour';
import {log} from 'util';

@Component({
  selector: 'app-tour-detail',
  templateUrl: './tour-detail.component.html',
  styleUrls: ['./tour-detail.component.css']
})
export class TourDetailComponent implements OnInit {
  vacantTours: VacantTour[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tourService: TourService,
    private location: Location
  ) {
  }

  ngOnInit() {
    this.getTour();
  }

  getTour(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.tourService.getVacantTours(id)
      .subscribe(vacantTours => this.vacantTours = vacantTours);
  }

  goBack(): void {
    this.location.back();
  }

  // order(vacId: number) {
  //   this.router.navigate(['/order/' + vacId]);
  // }
}
