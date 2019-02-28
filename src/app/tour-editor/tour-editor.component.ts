import { Component, OnInit } from '@angular/core';

import {Tour} from '../shared/tour';
import {TourService} from '../tour.service';

@Component({
  selector: 'app-tour-editor',
  templateUrl: './tour-editor.component.html',
  styleUrls: ['./tour-editor.component.css']
})
export class TourEditorComponent implements OnInit {
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

  deleteTour(id: number): void {
    this.tourService.deleteTour(id).subscribe(() => this.getTours());
  }

  createTour(): void {
    this.tourService.createTour(new Tour(this.defaultTitle)).subscribe(tour => this.tours.push(tour));
  }

}
