import { Component, OnInit } from '@angular/core';

import {Tour} from '../shared/tour';
import {TourService} from '../tour.service';

@Component({
  selector: 'app-tour-editor',
  templateUrl: './tour-editor.component.html',
  styleUrls: ['./tour-editor.component.css']
})
export class TourEditorComponent implements OnInit {
  title: string = 'List of tours';
  tours: Tour[];

  constructor(private tourService: TourService) { }

  ngOnInit() {
    this.getTours();
  }

  getTours() {
    this.tourService.getTours().subscribe(tours => this.tours = tours);
  }

  deleteTour(id: number) {
    alert("delete.");
  }

}
