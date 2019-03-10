import { Component, OnInit } from '@angular/core';

import {Tour} from '../../shared/tour';
import {AdminService} from '../../services/admin.service';

@Component({
  selector: 'app-tour-editor',
  templateUrl: './tour-editor.component.html',
  styleUrls: ['./tour-editor.component.css']
})
export class TourEditorComponent implements OnInit {
  defaultTitle: string = 'New tour';
  title: string = 'List of tours';
  tours: Tour[];

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.getTours();
  }

  getTours(): void {
    this.adminService.getTours().subscribe(tours => this.tours = tours);
  }

  deleteTour(tour: Tour): void {
    if(confirm("Are you sure? You will not be able to restore it.")){
      this.adminService.deleteTour(tour.id).subscribe(() => this.deleteTourFromList(tour));
    }
  }

  private deleteTourFromList(tour: Tour){
    let index = this.tours.indexOf(tour);
    if(index !== -1){
      this.tours.splice(index, 1);
    }
  }

  createTour(): void {
    this.adminService.createTour(new Tour(this.defaultTitle)).subscribe(tour => this.tours.push(tour));
  }

  switchTourVisibility(tour: Tour) {
    this.adminService.switchTourVisibility(tour.id)
      .subscribe(updatedTour => {
        let index = this.tours.indexOf(tour);
        if(index !== -1){
          this.tours[index] = updatedTour;
        }
      });
  }
}
