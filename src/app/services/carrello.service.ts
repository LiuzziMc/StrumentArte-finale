import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/Category';


@Injectable({
  providedIn: 'root'
})
export class CarrelloService {
  products: Product[] = [];

  
  constructor(private http: HttpClient) {   
    this.loadCartFromLocalStorage(); // Carica il carrello salvato nel localStorage all'avvio del servizio 
  }


  addToCart(product: Product) {
    const existingProduct = this.products.find(p => p.id_product === product.id_product);

    if (existingProduct) {
      // Se il prodotto esiste, incrementami la quantità 
      existingProduct.quantity += 1;
    } else {
      // Se il prodotto non esiste, immetti quantità 1
      product.quantity = 1;
      this.products.push(product);
    }

    this.saveCartToLocalStorage();
  }

// Metodo privato: Salva il carrello corrente come oggetto JSON nel localStorage
  private saveCartToLocalStorage() {
    const cartJSON = JSON.stringify(this.products); // Converte l'array "products" in formato JSON
    localStorage.setItem('cart', cartJSON);// Salva l'oggetto JSON nel localStorage con la chiave 'cart'
  }
// Metodo privato: Carica il carrello dal localStorage
  private loadCartFromLocalStorage() {
    const cartJSON = localStorage.getItem('cart');// Ottiene l'oggetto JSON salvato nel localStorage
    if (cartJSON) {
      this.products = JSON.parse(cartJSON); // Converte l'oggetto JSON in un array "products" (se presente)
    } else {
      this.products = [];// Se non è presente un oggetto JSON, inizializza l'array "products" come vuoto
    }
  }

  // Restituisce un array di oggetti "Product", rappresentante i prodotti nel carrello
  getItems(): Product[] {
    return this.products;
  }

  // Svuota il carrello rimuovendo tutti i prodotti e salvando il carrello vuoto nel localStorage
  clearCart(): void {
    this.products = [];
    this.saveCartToLocalStorage();// Salva il carrello vuoto nel localStorage
  }


  // Svuota il carrello rimuovendo tutti i prodotti e salvando il carrello vuoto nel localStorage
// Restituisce l'array vuoto di prodotti
  clearProduct() {
    this.products = [];
    this.saveCartToLocalStorage(); // Salva il carrello vuoto nel localStorage
    return this.products;// Restituisce l'array vuoto di prodotti
  }
   
  // aggiungiAlCarrello(product: Product): Observable<any> {
  //   const url = '/api/cartshoppings';
  //   const headers = { 'content-type': 'application/json' }
  //   const body = JSON.stringify(product);
  //   return this.http.post(url, body, { 'headers': headers });
  // }

 

}
