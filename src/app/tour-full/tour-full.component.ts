import {Component, Input, OnInit} from '@angular/core';

import {Tour} from '../shared/tour';

@Component({
  selector: 'app-tour-full',
  templateUrl: './tour-full.component.html',
  styleUrls: ['./tour-full.component.css']
})
export class TourFullComponent implements OnInit {
  @Input() tour: Tour;

  constructor() { }

  ngOnInit() {
  }

}
