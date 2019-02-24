import {Component, Input, OnInit} from '@angular/core';

import { Tour } from '../shared/tour';

@Component({
  selector: 'app-tour-lite',
  templateUrl: './tour-lite.component.html',
  styleUrls: ['./tour-lite.component.css']
})
export class TourLiteComponent implements OnInit {
  @Input() tour: Tour;

  constructor() {}

  ngOnInit() {
  }
}
