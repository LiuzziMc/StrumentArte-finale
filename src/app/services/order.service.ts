import { Injectable } from '@angular/core';
import { Order } from '../interfaces/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orderHistory: Order[] = [];

  constructor() { }

  addOrder(order: Order): void {
    this.orderHistory.push(order);
  }

}
