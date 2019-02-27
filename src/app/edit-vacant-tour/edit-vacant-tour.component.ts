import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

import {Tour} from '../shared/tour';
import {VacantTour} from '../shared/vacant-tour';
import {TourService} from '../tour.service';

@Component({
  selector: 'app-edit-vacant-tour',
  templateUrl: './edit-vacant-tour.component.html',
  styleUrls: ['./edit-vacant-tour.component.css']
})
export class EditVacantTourComponent implements OnInit {
  tour: Tour = new Tour();
  vacantTours: VacantTour[] = [];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private tourService: TourService,
              private location: Location) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.tourService.getTour(id).subscribe(tour => this.tour = tour);
    this.tourService.getVacantTours(id).subscribe(vacantTours => this.vacantTours = vacantTours);
  }

  createVacantTour(){
    let newVacantTour = new VacantTour();
    newVacantTour.vacant = false;
    this.vacantTours.push(newVacantTour);
  }

  saveVacantTour(vacantTour: VacantTour){
    this.tourService.createVacantTour(vacantTour); // TODO: subscribe
  }

  deleteVacantTour(vacId: number){
    this.tourService.deleteVacantTour(vacId); // TODO: subscribe
  }

}
