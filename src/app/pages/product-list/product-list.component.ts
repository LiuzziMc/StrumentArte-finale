import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/interfaces/Category';
import { CarrelloService } from 'src/app/services/carrello.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  prodotti: any[] = [];
  

  // per costruire questo componente mi serve che Angular
  // passi questi valori
  constructor(
    private route: ActivatedRoute,
    private servizio: CommonService,
    private carrello: CarrelloService
  ) { }


  ngOnInit() {
    // mettiamo in osservazione sui parametri del routing per ricavare l'id del prodotto
    this.route.params.subscribe((parametri: any) => {
      console.log("HO UN REFRESH DELLA PAGINA: ", parametri);
      // aggiorno i dati del prodotto ricavandomi l'id da parametro
      this.getCategoria(parametri.categoria);
    });
  }

  private getCategoria(id: string) {
    // richiamo dal servizio i dati del prodotto con l'id fornito
    this.servizio.getCategoria(id).subscribe((risultatoDalServizio) => {
      this.prodotti = risultatoDalServizio;
      console.log("PRODOTTI DELLA CATEGORIA: ", this.prodotti);
    })
  }



}
