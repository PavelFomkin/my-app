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
  target: VacantTour;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private tourService: TourService,
              private location: Location) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.tourService.getTour(id)
                    .subscribe(tour => this.tour = tour);
    this.tourService.getAllVacantTours(id)
                    .subscribe(vacantTours => this.vacantTours = vacantTours);
  }

  createVacantTour(): void {
    let newVacantTour = new VacantTour();
    newVacantTour.tour = this.tour;
    this.target = newVacantTour;
    this.vacantTours.push(newVacantTour);
  }

  saveVacantTour(): void {
    this.tourService.saveVacantTour(this.target)
                    .subscribe(updatedTour => {
                      const index: number = this.vacantTours.indexOf(this.target);
                      if(index !== -1){
                         this.vacantTours[index] = updatedTour;
                      }
                      this.target = null;
                    });
  }

  deleteVacantTour(vacantTour: VacantTour): void{
    if(this.isDraft(vacantTour)){
      this.deleteVacantTourFromList(vacantTour);
    } else {
      this.tourService.deleteVacantTour(vacantTour.id)
                      .subscribe(_ => this.deleteVacantTourFromList(vacantTour));
    }
  }

  changeStatus(vacantTour: VacantTour): void {
    this.tourService.changeStatusVacantTour(vacantTour)
                    .subscribe(updatedTour => {
                      const index: number = this.vacantTours.indexOf(vacantTour);
                      if(index !== -1){
                         this.vacantTours[index] = updatedTour;
                    }});
  }

  edit(vacantTour: VacantTour): void {
    this.target = vacantTour;
  }

  cancel(vacantTour: VacantTour): void{
    this.target = null;
  }

  goBack(): void {
    this.location.back();
  }

  private isDraft(vacantTour: VacantTour): boolean {
    return vacantTour.id === undefined;
  }

  private deleteVacantTourFromList(vacantTour: VacantTour): void {
    const index: number = this.vacantTours.indexOf(vacantTour);
    if(index !== -1){
      this.vacantTours.splice(index, 1);
    }
  }
}
