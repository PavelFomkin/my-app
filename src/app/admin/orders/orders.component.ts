import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';

import {Order} from '../../entity/order';
import {AdminService} from '../../services/admin.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  title: string = "Orders";
  orders: Order[];

  constructor(private adminService: AdminService,
              private location: Location) { }

  ngOnInit() {
    this.getOrders();
  }

  getOrders(){
    this.adminService.getOrders().subscribe(orders => this.orders = orders);
  }

  deleteOrder(order: Order): void{
    if(confirm("Are you sure? You will not be able to restore it.")){
      this.adminService.deleteOrder(order.id)
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
      this.adminService.confirmOrder(order.id).subscribe(() => order.confirmation = true);
    }
  }

  cancelOrderConfirmation(order: Order){
    if(order.confirmation){
      this.adminService.cancelOrderConfirmation(order.id).subscribe(() => order.confirmation = false);
    }
  }
}
