import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

import {Tour} from '../../../entity/tour';
import {VacantDate} from '../../../entity/vacant-date';
import {AdminService} from '../../../services/admin.service';

@Component({
  selector: 'app-edit-vacant-tour',
  templateUrl: './vacant-date.component.html',
  styleUrls: ['./vacant-date.component.css']
})
export class VacantDateComponent implements OnInit {
  tour: Tour = new Tour('');
  vacantDates: VacantDate[] = [];
  buffer: VacantDate = new VacantDate();
  target: VacantDate;
  error: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private adminService: AdminService,
              private location: Location) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.adminService.getTour(id).subscribe(tour => {
                      this.tour = tour;
                      this.getAllVacantDates(tour.id);
                    });
  }

  getAllVacantDates(id: number){
    this.adminService.getAllVacantDates(id)
                     .subscribe(vacantDates => this.vacantDates = vacantDates);
  }

  createVacantDate(): void {
    let newDate = new VacantDate();
    newDate.tour = this.tour;
    this.target = newDate;
    this.vacantDates.push(newDate);
  }

  saveVacantDate(): void {
    this.adminService.saveVacantDate(this.target)
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
      this.adminService.deleteVacantDate(vacantDate.id)
                      .subscribe(() => this.deleteVacantDateFromList(vacantDate));
    }
  }

  changeStatus(vacantDate: VacantDate): void {
    this.adminService.changeStatusVacantDate(vacantDate)
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
