import { Component, Input, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { faArrowLeft, faExpandArrowsAlt, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Category, Product } from 'src/app/interfaces/Category';
import { CommonService } from 'src/app/services/common.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CarrelloService } from 'src/app/services/carrello.service';
import { PreferitiService } from 'src/app/services/preferiti.service';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})

export class CarouselComponent implements OnInit {

  selectedProduct: any;

  // icone da visualizzare in pagina
  faArrowRight = faArrowRight
  faCartShopping = faCartShopping
  faHeart = faHeart
  faExpandArrowsAlt = faExpandArrowsAlt
  faArrowLeft = faArrowLeft

  categories: Category[] = [];

  @Input() products: Product[] = [];
  private preferiti: Product[] = [];
  sortingForm: FormGroup = this.formBuilder.group({ sortingCriteria: ['default'] });

  /**
   * attributo calcolato che mi restituisce il banner da visualizzare
   */
  get pageBanner() {
    /**
     * Nel caso ci fosse una categoria potre fare:
     
    if (categoria?.banner) {
      return categoria.banner;
    } else if (this.products?.length> 0 && this.products[0].banner) {
      return this.products[0].banner;
    }
    */
    if (this.products?.length > 0 && this.products[0].banner) {
      return this.products[0].banner;
    }
    return "";
  }

  constructor(
    private http: HttpClient, private commonService: CommonService, private formBuilder: FormBuilder, private carrelloService: CarrelloService, private router: Router, private preferitiService: PreferitiService) { }

  // Aggiunge un prodotto ai preferiti
  addToPreferiti(product: Product) {
    this.preferitiService.addToPreferiti(product);
    window.alert('Prodotto aggiunto ai preferiti!');
  }

  // Aggiunge un prodotto al carrello
  addToCart(product: Product) {
    this.carrelloService.addToCart(product);
    window.alert('Prodotto aggiunto al carrello!');
  }

  ngOnInit() {
    // Recupera il prodotto selezionato dalla memoria locale
    const product = localStorage.getItem('selectedProduct');
    this.selectedProduct = product ? JSON.parse(product) : null;
    // this.getAllProducts();

  }

  private getAllProducts(): void {
    // Richiama il metodo `getProduct()` dal servizio `commonService` per ottenere tutti i prodotti
    this.commonService.getProduct().subscribe((data: Product[]) => {
      // Assegna i dati ottenuti dalla chiamata alla variabile `products` del componente
      this.products = data;
    });
  }

  // Naviga alla pagina di dettaglio del prodotto
  goToProductDetail(product: Product) {
    localStorage.setItem('selectedProduct', JSON.stringify(product));
    this.router.navigateByUrl('/product');
  }


}



