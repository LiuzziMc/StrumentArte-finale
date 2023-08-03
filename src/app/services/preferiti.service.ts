import { Injectable } from '@angular/core';
import { Product } from 'src/app/interfaces/Category';
import { HttpClient } from '@angular/common/http';
import { CarrelloService } from './carrello.service';


@Injectable({
  providedIn: 'root'
})
export class PreferitiService {
  products: Product[] = [];
  private preferiti: Product[] = [];
  items = this.carrelloService.getItems();



  constructor(private http: HttpClient, private carrelloService: CarrelloService) { }

  addToPreferiti(product: Product) {
    this.preferiti.push(product);
  }

  getPreferiti(): Product[] {
    return this.preferiti;
  }

  getItems() {
    return this.products;
  }

  addToCart(product: Product) {
    const existingProductIndex = this.products.findIndex(p => p.id_product === product.id_product);

    if (existingProductIndex !== -1) {
      // Se il prodotto esiste già nel carrello, aumenta la quantità
      this.products[existingProductIndex].quantity += 1;
    } else {
      // Se il prodotto non esiste ancora nel carrello, aggiungilo
      product.quantity = 1;
      this.products.push(product);
    }

    this.saveCartToLocalStorage();
  }
  private saveCartToLocalStorage() {
    // Converti il carrello in formato JSON
    const cartJSON = JSON.stringify(this.products);
    // Salva il carrello nel localStorage con una chiave specifica, ad esempio "cart"
    localStorage.setItem('cart', cartJSON);
  }

  private loadCartFromLocalStorage() {
    const cartJSON = localStorage.getItem('cart');
    if (cartJSON) {
      // Se il carrello è già presente nel localStorage, carica i dati nel carrello del servizio
      this.products = JSON.parse(cartJSON);
    } else {
      // Se il carrello non è ancora presente nel localStorage, inizializzalo vuoto
      this.products = [];
    }
  }
  //Rimuovo la sezione dei preferiti
  emptyPreferiti() {
    this.preferiti = [];
  }

  //Rimuovo il prodotto dai preferiti
  removeFromPreferiti(product: Product) {
    const index = this.preferiti.indexOf(product);
    if (index !== -1) {
      this.preferiti.splice(index, 1);
      alert('Prodotto rimosso dai preferiti');
    }
  }
}