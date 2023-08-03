import { Component, OnInit } from '@angular/core';
import { CarrelloService } from '../../services/carrello.service';
import { OrderService } from 'src/app/services/order.service';
import { Product } from '../../interfaces/Category';
import { Order, Address } from 'src/app/interfaces/Order';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  items: Product[] = [];
  total: number = 0; // Variabile per memorizzare il prezzo totale dell'ordine
  discountCode: string = ''; // Codice sconto inserito dall'utente

  constructor(private carrelloService: CarrelloService, private orderService: OrderService) { }

  ngOnInit(): void {
    // Recuperare gli articoli del carrello dal carrelloService
    this.items = this.carrelloService.getItems();
    // Calcola il prezzo totale
    this.total = this.calculateTotalPrice();
  }

    // Calcola il prezzo totale degli articoli nel carrello
  calculateTotalPrice(): number {
    let total = 0;
    for (const item of this.items) {
      total += item.price * item.quantity;
    }
    return total;
  }

  
  // Calcola il prezzo totale dell'ordine
  getTotalPrice(): number {
    let total = 0;
    for (const item of this.items) {
      total += item.price * item.quantity;
    }
    // Applica lo sconto solo se il codice sconto è valido
    if (this.isDiscountCodeValid()) {
      // Applica lo sconto al totale
      total *= 0.9; 
    }

    return total;
  }

  // Verifica se il codice sconto inserito è valido
  isDiscountCodeValid(): boolean {
    const validDiscountCodes = ['DISCOUNT10', 'SUMMER10'];
    return validDiscountCodes.includes(this.discountCode);
  }
}
