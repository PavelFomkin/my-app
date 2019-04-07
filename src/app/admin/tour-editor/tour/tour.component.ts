import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

import {Tour} from '../../../entity/tour';
import {AdminService} from '../../../services/admin.service';

@Component({
  selector: 'app-edit-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {
  inputPictureUrl: string = '';
  tour: Tour;

  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
  sunday: boolean;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private adminService: AdminService,
              private location: Location) {
  }

  ngOnInit() {
    this.getTour();
  }

  getTour(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.adminService.getTour(id)
      .subscribe(tour => {
        this.tour = tour;
        this.fillVacantDaysOfWeek(tour.disabledDaysOfWeek);
      });
  }

  goBack(): void {
    this.location.back();
  }

  updateTour(): void {
    this.putDisabledDaysOfWeekIntoTour();
    this.adminService.updateTour(this.tour).subscribe(() => this.goBack());
  }

  addPictureUrl() {
    if(this.inputPictureUrl.trim() !== ''){
      this.tour.pictures.push(this.inputPictureUrl);
      this.inputPictureUrl = '';
    }
  }

  deletePicture(pic: string){
    let index = this.tour.pictures.indexOf(pic);
    if(index !== -1){
      this.tour.pictures.splice(index, 1);
    }
  }

  // daysOfWeek consist of disabled days of tour.
  private fillVacantDaysOfWeek(disabledDaysOfWeek: number[]) {
    this.monday = disabledDaysOfWeek.indexOf(1) == -1;
    this.tuesday = disabledDaysOfWeek.indexOf(2) == -1;
    this.wednesday = disabledDaysOfWeek.indexOf(3) == -1;
    this.thursday = disabledDaysOfWeek.indexOf(4) == -1;
    this.friday = disabledDaysOfWeek.indexOf(5) == -1;
    this.saturday = disabledDaysOfWeek.indexOf(6) == -1;
    this.sunday = disabledDaysOfWeek.indexOf(0) == -1;
  }

  private putDisabledDaysOfWeekIntoTour() {
    this.tour.disabledDaysOfWeek = [];
    if (!this.monday) this.tour.disabledDaysOfWeek.push(1);
    if (!this.tuesday) this.tour.disabledDaysOfWeek.push(2);
    if (!this.wednesday) this.tour.disabledDaysOfWeek.push(3);
    if (!this.thursday) this.tour.disabledDaysOfWeek.push(4);
    if (!this.friday) this.tour.disabledDaysOfWeek.push(5);
    if (!this.saturday) this.tour.disabledDaysOfWeek.push(6);
    if (!this.sunday) this.tour.disabledDaysOfWeek.push(0);
  }
}
