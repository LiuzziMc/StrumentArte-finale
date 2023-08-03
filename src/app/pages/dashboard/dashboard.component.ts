import { Component } from '@angular/core';
import { Category } from 'src/app/interfaces/Category';
import { User } from 'src/app/interfaces/User';
import { Order } from 'src/app/interfaces/Order';
import { Payment } from 'src/app/interfaces/Payment';
import { CommonService } from 'src/app/services/common.service';
import { faArrowPointer, faClock, faCreditCard, faPhoneVolume, faShieldHalved, faTruck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  categories: Category[] = [];
  users: User[] = [];
  orders: Order[] = [];
  payments: Payment[] = [];
  
  faTruck = faTruck;
  faClock = faClock;
  faArrowPointer = faArrowPointer;
  faShieldHalved = faShieldHalved;
  faPhoneVolume = faPhoneVolume;
  faCreditCard = faCreditCard;


  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.getAllCategoriesFromCommonService();
    this.getAllUsersFromCommonService();
    this.getAllOrdersFromCommonService();
    this.getAllPaymentsFromCommonService();

  }



  private getAllCategoriesFromCommonService() {
    this.commonService.getAllCategories().subscribe(categories => this.categories = categories);
    console.log(this.categories);


  }

  private getAllUsersFromCommonService() {
    this.commonService.getAllUsers().subscribe(users => this.users = users);
    console.log(this.users);


  }

  private getAllOrdersFromCommonService() {
    this.commonService.getAllOrders().subscribe(orders => this.orders = orders);
    console.log(this.orders);


  }

  
  private getAllPaymentsFromCommonService() {
    this.commonService.getAllPayments().subscribe(payments => this.payments = payments);
    console.log(this.payments);


  }
}




