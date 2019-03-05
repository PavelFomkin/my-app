import { Component, OnInit } from '@angular/core';

import {Tour} from '../shared/tour';
import {TourService} from '../tour.service';

@Component({
  selector: 'app-tour-editor',
  templateUrl: './admin-tour-editor.component.html',
  styleUrls: ['./admin-tour-editor.component.css']
})
export class AdminTourEditorComponent implements OnInit {
  defaultTitle: string = 'New tour';
  title: string = 'List of tours';
  tours: Tour[];

  constructor(private tourService: TourService) { }

  ngOnInit() {
    this.getTours();
  }

  getTours(): void {
    this.tourService.getTours().subscribe(tours => this.tours = tours);
  }

  deleteTour(tour: Tour): void {
    if(confirm("Are you sure? You will not be able to restore it.")){
      this.tourService.deleteTour(tour.id).subscribe(() => this.deleteTourFromList(tour));
    }
  }

  private deleteTourFromList(tour: Tour){
    let index = this.tours.indexOf(tour);
    if(index !== -1){
      this.tours.splice(index, 1);
    }
  }

  createTour(): void {
    this.tourService.createTour(new Tour(this.defaultTitle)).subscribe(tour => this.tours.push(tour));
  }

  switchTourVisibility(tour: Tour) {
    this.tourService.switchTourVisibility(tour.id)
      .subscribe(updatedTour => {
        let index = this.tours.indexOf(tour);
        if(index !== -1){
          this.tours[index] = updatedTour;
        }
      });
  }
}
