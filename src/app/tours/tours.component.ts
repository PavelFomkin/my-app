import {Component, OnInit} from '@angular/core';

import {Tour} from '../entity/tour';
import {TourService} from '../services/tour.service';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class ToursComponent implements OnInit {
  title: string = 'List of tours';
  tours: Tour[] = [];

  constructor(private tourService: TourService) {
  }

  ngOnInit() {
    this.getTours();
  }

  getTours() {
    this.tourService.getTours().subscribe(tours => this.tours = tours);
  }
}
