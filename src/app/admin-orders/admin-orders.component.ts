import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';

import {Order} from '../shared/order';
import {TourService} from '../tour.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {
  title: string = "Orders";
  orders: Order[];

  constructor(private tourService: TourService,
              private location: Location) { }

  ngOnInit() {
    this.getOrders();
  }

  getOrders(){
    this.tourService.getOrders().subscribe(orders => this.orders = orders);
  }

  deleteOrder(order: Order): void{
    if(confirm("Are you sure? You will not be able to restore it.")){
      this.tourService.deleteOrder(order.id)
                          .subscribe(() => this.deleteOrderFromList(order));
    }
  }

  private deleteOrderFromList(order: Order){
    let index = this.orders.indexOf(order);
    if(index !== -1){
      this.orders.splice(index, 1);
    }
  }

  goBack(): void {
    this.location.back();
  }

  confirmOrder(order: Order){
    if(!order.confirmation){
      this.tourService.confirmOrder(order.id).subscribe(() => order.confirmation = true);
    }
  }

  cancelOrderConfirmation(order: Order){
    if(order.confirmation){
      this.tourService.cancelOrderConfirmation(order.id).subscribe(() => order.confirmation = false);
    }
  }
}
