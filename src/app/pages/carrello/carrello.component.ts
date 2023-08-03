import { Component } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { CarrelloService } from '../../services/carrello.service';
import { Category, Product } from 'src/app/interfaces/Category';
import { CommonService } from 'src/app/services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.scss']
})
export class CarrelloComponent {
  categories: Category[] = [];
  items = this.carrelloService.getItems();// Ottiene gli oggetti nel carrello dal servizio
  discountCode: string = '';

  //Icone utilizzate
  faArrowLeft = faArrowLeft

  constructor(private carrelloService: CarrelloService, private commonService: CommonService, private router: Router) {
    this.items = this.carrelloService.getItems();
  }

  // Verifica se il codice sconto è valido
  isDiscountCodeValid(): boolean {
    const validDiscountCodes = ['DISCOUNT10', 'SUMMER10'];
    return validDiscountCodes.includes(this.discountCode);
  }

  addToCart(product: Product) {
    const existingProduct = this.items.find(p => p.id_product === product.id_product);

    if (existingProduct) {
      // Product is already in the cart, increase the quantity
      existingProduct.quantity += 1;
    } else {
      // Product is not in the cart, add it with quantity = 1
      product.quantity = 1;
      this.items.push(product);
    }


  }
  // Rimuove un prodotto dal carrello
  clearProduct(id_product: number) {
    this.items = this.items.filter(item => item.id_product !== id_product);
    window.alert('Prodotto rimosso con successo!');
  }

  // Svuota completamente il carrello
  clearCart() {
    this.carrelloService.clearCart();
    this.items = []; // Clear the items array in the component
    window.alert('Carrello svuotato con successo!');
  }

  // Naviga alla pagina di checkout
  goToCheckout() {
    this.router.navigate(['/checkout']);
  }

  // Calcola il prezzo totale dell'ordine
  getTotalPrice(): number {
    let total = 0;
    for (const item of this.items) {
      total += item.price * item.quantity;
    }
    // Applica lo sconto solo se il codice sconto è valido
    if (this.isDiscountCodeValid()) {
      // Applica uno sconto del 10%
      total *= 0.9;
    }

    return total;
  }


  // Naviga alla pagina degli acquisti
  goToShop() {
    this.router.navigate(['/product']);
  }



}
