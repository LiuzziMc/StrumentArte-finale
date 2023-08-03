import { Injectable } from '@angular/core';
import { Observable, Subject, map, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product, Category } from '../interfaces/Category';


@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private baseUrl = '/api/';

  isNavbarVisible = new Subject<boolean>;
  isLogged = new Subject<boolean>;
  // product = new Subject<Product>;


  private carrello: any[] = [];


  constructor(private http: HttpClient) {
    this.isLogged.next(false);
  }

  //Restituisce tutti gli elementi presenti nell'array XY (prende i dati dal db.json)
  getAllCategories(): Observable<any[]> {
    const url = '/api/categories';
    return this.http.get<any[]>(url);
  }

  getCategoria(nomeCategoria: string): Observable<any> {
    const url = '/api/categories?name=' + nomeCategoria;
    // interrogo il database per recuperare l'id della categoria
    return this.http.get<any[]>(url).pipe(
      // utilizzo l'operator rxjs per rimappare la risposta
      switchMap((datiCat:any[])=> { // una volta che ho i dati della categoria ricavo i prodotti associati
        console.log("DATI CATEGORIA: ", datiCat);
        let idCategoria = 0;
        if (datiCat.length>0) {
          idCategoria = datiCat[0].id_category;
        }
        const urlProdotti = '/api/products?fk_category=' + idCategoria;
        return this.http.get<any[]>(urlProdotti);
       })
    );
  }
  
  login(datiUtente: any) {
    return this.http.post<any>('/bi/login', datiUtente);
  }

  register(datiUtente: any) {
    return this.http.post<any>('/bi/register', datiUtente);

  }



  



  //esempi in classe
  // Ottieni tutti i prodotti
  getProduct(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/products`);
  }

  // Ottieni un singolo prodotto per ID
  getProductById(productId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/products/${productId}`);

  }

  // Ottieni tutte le categorie
  getCategory(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/categories`);

  }



  inserisciOrdine(ordine: any) {
    this.carrello.push(ordine);
  }

  eliminaOrdine(prodotto: any) {
    const posizioneProdotto = this.carrello.indexOf(prodotto);
    // verifico che esiste un prodotto da eliminare
    if (posizioneProdotto > 0) {
      this.carrello.splice(posizioneProdotto, 1);
    }
  }



  getAllUsers(): Observable<any[]> {
    const url = '/api/users';
    return this.http.get<any[]>(url);
  }

  getAllOrders(): Observable<any[]> {
    const url = '/api/orders';
    return this.http.get<any[]>(url);
  }

  getAllPayments(): Observable<any[]> {
    const url = '/api/payments';
    return this.http.get<any[]>(url);
  }

 
}