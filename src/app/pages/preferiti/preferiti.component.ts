import { Component, OnInit } from '@angular/core';
import { PreferitiService } from 'src/app/services/preferiti.service';
import { Product } from 'src/app/interfaces/Category';
import { CarrelloService } from 'src/app/services/carrello.service';

@Component({
  selector: 'app-preferiti',
  templateUrl: './preferiti.component.html',
  styleUrls: ['./preferiti.component.scss']
})
export class PreferitiComponent implements OnInit {
  preferiti: Product[] = [];
  selectedProduct: Product | null = null;
  product: any;
  items = this.carrelloService.getItems();


  constructor(private preferitiService: PreferitiService, private carrelloService: CarrelloService) { }


  ngOnInit() {
    const product = localStorage.getItem('selectedProduct');
    this.selectedProduct = product ? JSON.parse(product) : null;

    // Ottiengo la lista dei preferiti utilizzando il metodo getPreferiti() del PreferitiService
    this.preferiti = this.preferitiService.getPreferiti();
  }

  //Aggiungo il prodotto ai preferiti
  addToPreferiti(product: Product) {
    this.preferitiService.addToPreferiti(product);
  }
  //Rimuovo il prodotto dai preferiti
  removeFromPreferiti(product: Product) {
    const index = this.preferiti.indexOf(product);
    if (index !== -1) {
      this.preferiti.splice(index, 1);
      alert('Prodotto rimosso dai preferiti');
    }
  }

  //Rimuovo la sezione dei preferiti
  emptyPreferiti() {
    this.preferitiService.emptyPreferiti();
    this.preferiti = []; 
    alert('Sezione vuota');
  }
  
 //Aggiungo il prodotto al carrello
  addToCart(product: Product) {
    this.carrelloService.addToCart(product);
    alert('Prodotto aggiunto al carrello!');
  }
}