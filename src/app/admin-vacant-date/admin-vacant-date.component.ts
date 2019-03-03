import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

import {Tour} from '../shared/tour';
import {VacantDate} from '../shared/vacant-date';
import {TourService} from '../tour.service';

@Component({
  selector: 'app-edit-vacant-tour',
  templateUrl: './admin-vacant-date.component.html',
  styleUrls: ['./admin-vacant-date.component.css']
})
export class AdminVacantDateComponent implements OnInit {
  tour: Tour = new Tour('');
  vacantDates: VacantDate[] = [];
  buffer: VacantDate = new VacantDate();
  target: VacantDate;
  error: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private tourService: TourService,
              private location: Location) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.tourService.getTour(id)
                    .subscribe(tour => this.tour = tour);
    this.tourService.getAllVacantDates(id)
                    .subscribe(vacantDates => this.vacantDates = vacantDates);
  }

  createVacantDate(): void {
    let newDate = new VacantDate();
    newDate.tour = this.tour;
    this.target = newDate;
    this.vacantDates.push(newDate);
  }

  saveVacantDate(): void {
    this.tourService.saveVacantDate(this.target)
                    .subscribe(updatedDate => {
                      const index: number = this.vacantDates.indexOf(this.target);
                      if(index !== -1){
                         this.vacantDates[index] = updatedDate;
                      }
                      this.buffer = new VacantDate();
                      this.target = null;
                    });
  }

  deleteVacantDate(vacantDate: VacantDate): void{
    if(this.isDraft(vacantDate)){
      this.deleteVacantDateFromList(vacantDate);
    } else {
      this.tourService.deleteVacantDate(vacantDate.id)
                      .subscribe(() => this.deleteVacantDateFromList(vacantDate));
    }
  }

  changeStatus(vacantDate: VacantDate): void {
    this.tourService.changeStatusVacantDate(vacantDate)
                    .subscribe(updatedDate => {
                      const index: number = this.vacantDates.indexOf(vacantDate);
                      if(index !== -1){
                         this.vacantDates[index] = updatedDate;
                    }});
  }

  edit(vacantDate: VacantDate): void {
    this.createBuffer(vacantDate);
    this.target = vacantDate;
  }

  cancel(): void{
    if (this.target.id === undefined) {
      this.deleteVacantDateFromList(this.target);
    } else {
      const index: number = this.vacantDates.indexOf(this.target);
      if(index !== -1){
        this.vacantDates[index] = this.buffer;
      }
    }
    this.buffer = new VacantDate();
    this.target = null;
  }

  goBack(): void {
    this.location.back();
  }

  private isDraft(vacantDate: VacantDate): boolean {
    return vacantDate.id === undefined;
  }

  private deleteVacantDateFromList(vacantDate: VacantDate): void {
    const index: number = this.vacantDates.indexOf(vacantDate);
    if(index !== -1){
      this.vacantDates.splice(index, 1);
    }
  }

  private createBuffer(vacantDate: VacantDate): void{
    this.buffer.id = vacantDate.id;
    this.buffer.startDate = vacantDate.startDate;
    this.buffer.vacantPlaces = vacantDate.vacantPlaces;
    this.buffer.vacant = vacantDate.vacant;
    this.buffer.tour = vacantDate.tour;
  }
}
