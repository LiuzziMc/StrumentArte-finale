import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Product } from 'src/app/interfaces/Category';
import { CarrelloService } from 'src/app/services/carrello.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {
  
  selectedProduct: Product | null = null;
  product: any;
  products: Product[] = [];
  items = this.carrelloService.getItems();
  faHeart = faHeart



  addToCart(product: Product) {
    this.carrelloService.addToCart(product);
    window.alert('Prodotto aggiunto al carrello!');
  }


  constructor(private carrelloService: CarrelloService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    const product = localStorage.getItem('selectedProduct');
    this.selectedProduct = product ? JSON.parse(product) : null;
  }


}