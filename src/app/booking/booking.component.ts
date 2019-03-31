import {Component, OnInit} from '@angular/core';
import {VacantDate} from '../entity/vacant-date';
import {ActivatedRoute, Router} from '@angular/router';
import {TourService} from '../services/tour.service';
import {Location} from '@angular/common';
import {Tour} from '../entity/tour';
import {Order} from '../entity/order';

@Component({
  selector: 'app-order',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  vacantDate: VacantDate = new VacantDate();
  tour: Tour = new Tour('');
  participants: number[] = [];
  order: Order = new Order();
  error: any;
  booked: boolean = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
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
                                                this.participants = this.createRange(vacantDate.tour.participants);
                                                },
                                                 error => this.error = error);
  }

  private createRange(number: number): number[]{
    let items: number[] = [];
    for(let i = 1; i <= number; i++){
      items.push(i);
    }
    return items;
  }

  bookTour(){
    this.order.bookingDate = new Date();
    this.tourService.createOrder(this.order).subscribe(() => {
      this.booked = true;
    });
  }

  goBack(): void {
    this.location.back();
  }
}
