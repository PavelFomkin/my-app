import {Component, OnInit, ViewChild} from '@angular/core';
import {Tour} from '../entity/tour';
import {VacantDate} from '../entity/vacant-date';
import {TourService} from '../services/tour.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Calendar} from '../entity/calendar';

@Component({
  selector: 'app-tour-info',
  templateUrl: './tour-info.component.html',
  styleUrls: ['./tour-info.component.css']
})
export class TourInfoComponent implements OnInit {
  tour: Tour;
  vacantDates: VacantDate[] = [];
  bookedDates: Calendar[];
  images: any[] = [];

  constructor(private route: ActivatedRoute,
              private tourService: TourService,
              private location: Location) { }

  ngOnInit() {
    this.getTour();
    this.images.push({source:'https://pp.userapi.com/c852220/v852220985/651d7/ks9kzze4LUQ.jpg', alt:'Description for Image 1', title:'Title 1'});
    this.images.push({source:'https://pp.userapi.com/c852220/v852220985/651d7/ks9kzze4LUQ.jpg', alt:'Description for Image 2', title:'Title 2'});
    this.images.push({source:'https://pp.userapi.com/c852220/v852220985/651d7/ks9kzze4LUQ.jpg', alt:'Description for Image 3', title:'Title 3'});
    this.images.push({source:'https://pp.userapi.com/c852220/v852220985/651d7/ks9kzze4LUQ.jpg', alt:'Description for Image 4', title:'Title 4'});
    this.images.push({source:'https://pp.userapi.com/c852220/v852220985/651d7/ks9kzze4LUQ.jpg', alt:'Description for Image 5', title:'Title 5'});
  }

  getTour() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.tourService.getTour(id)
                    .subscribe(tour => {
                                this.tour = tour;
                                this.getVacantDates(tour.id);
                              });
  }

  getVacantDates(id: number) {
    this.tourService.getVacantDates(id).subscribe(vacantDates => this.vacantDates = vacantDates);
  }

  getDates(){
    this.tourService.getVacantDates2(2019,3)
      .subscribe(dates => {
        this.bookedDates = dates;
      });
  }

  goBack() {
    this.location.back();
  }
}
