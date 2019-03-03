import {Component, OnInit} from '@angular/core';
import {VacantDate} from '../shared/vacant-date';
import {ActivatedRoute} from '@angular/router';
import {TourService} from '../tour.service';
import {Location} from '@angular/common';
import {Tour} from '../shared/tour';
import {Order} from '../shared/order';

@Component({
  selector: 'app-order',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  vacantDate: VacantDate = new VacantDate();
  tour: Tour = new Tour('');
  participants: number[] = [1,2,3,4];
  order: Order = new Order();
  error: any;

  constructor(private route: ActivatedRoute,
              private tourService: TourService,
              private location: Location) { }

  ngOnInit() {
    this.getVacantDate();
  }

  getVacantDate(): void {
    const id = +this.route.snapshot.paramMap.get('vacId');
    this.tourService.getVacantDate(id).subscribe(vacantDate => {
                                                this.vacantDate = vacantDate;
                                                this.tour = vacantDate.tour;
                                                this.order.tourId = this.tour.id;
                                                this.order.vacantDateId = vacantDate.id;
                                                },
                                                 error => this.error = error);
  }

  bookTour(){
    this.order.bookingDate = new Date();
    alert("book");
  }

  goBack(): void {
    this.location.back();
  }
}
