import { Component, OnInit } from '@angular/core';
import {Order} from '../shared/order';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {
  orders: Order[];

  constructor() { }

  ngOnInit() {
  }

}
