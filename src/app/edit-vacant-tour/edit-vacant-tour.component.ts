import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

import {Tour} from '../shared/tour';
import {VacantTour} from '../shared/vacant-tour';
import {TourService} from '../tour.service';

const emptyValue = -1;

@Component({
  selector: 'app-edit-vacant-tour',
  templateUrl: './edit-vacant-tour.component.html',
  styleUrls: ['./edit-vacant-tour.component.css']
})
export class EditVacantTourComponent implements OnInit {
  tour: Tour = new Tour();
  vacantTours: VacantTour[] = [];
  targetId: number;

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
    this.vacantTours.push(newVacantTour);
  }

  saveVacantTour(vacantTour: VacantTour){
    this.targetId = emptyValue;
    this.tourService.createVacantTour(vacantTour); // TODO: subscribe
  }

  deleteVacantTour(vacId: number){
    this.tourService.deleteVacantTour(vacId); // TODO: subscribe
  }

  edit(vacId: number){
    this.targetId = vacId;
  }

  cancel(){
    this.targetId = emptyValue;
  }

  goBack(): void {
    this.location.back();
  }

}
