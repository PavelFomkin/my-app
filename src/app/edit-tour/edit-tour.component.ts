import { Component, OnInit } from '@angular/core';
import {Tour} from '../shared/tour';

@Component({
  selector: 'app-edit-tour',
  templateUrl: './edit-tour.component.html',
  styleUrls: ['./edit-tour.component.css']
})
export class EditTourComponent implements OnInit {
  tour: Tour;

  constructor() { }

  ngOnInit() {
  }

}
