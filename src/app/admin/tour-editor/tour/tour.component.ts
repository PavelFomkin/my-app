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
  tour: Tour = new Tour('');
  inputPictureUrl: string = '';
  error: any;

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
      .subscribe(tour => this.tour = tour);
  }

  goBack(): void {
    this.location.back();
  }

  updateTour(): void {
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
}
