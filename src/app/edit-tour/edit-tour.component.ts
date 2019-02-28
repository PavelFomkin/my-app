import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

import {Tour} from '../shared/tour';
import {TourService} from '../tour.service';

@Component({
  selector: 'app-edit-tour',
  templateUrl: './edit-tour.component.html',
  styleUrls: ['./edit-tour.component.css']
})
export class EditTourComponent implements OnInit {
    tour: Tour = new Tour();

    constructor(private route: ActivatedRoute,
                private router: Router,
                private tourService: TourService,
                private location: Location) { }

    ngOnInit() {
      this.getTour();
    }

    getTour(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.tourService.getTour(id)
                      .subscribe(tour => this.tour = tour);
    }

    goBack(): void {
      this.location.back();
    }

    updateTour(): void {
      this.tourService.updateTour(this.tour).subscribe(_ => this.goBack());
    }

    switchVisibility(){
      this.tourService.switchTourVisibility(this.tour.id)
                      .subscribe(_ => this.tour.visible = !this.tour.visible);
    }
}
