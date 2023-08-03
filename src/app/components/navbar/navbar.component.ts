import { Component, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { CommonService } from 'src/app/services/common.service';
import { LoginComponent } from '../login/login.component';
import { Category } from 'src/app/interfaces/Category';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  categories: any[] = [];
  Categories: Category[] = [];

  //Icone utilizzate
  faUser = faUser;
  faCartShopping = faCartShopping;
  faHeart = faHeart;

  isLogged: boolean = false; // Variabile per verificare se l'utente è loggato


  path: any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private commonService: CommonService,
    private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef, private httpclient: HttpClient) {
  }

  ngOnInit() {
    // Recupera tutte le categorie dal servizio CommonService
    this.commonService.getAllCategories().subscribe(
      (data) => {
        this.categories = data;
      },
      (error) => {
        console.error('Errore nel recuperare le categorie:', error);
      }
    );
  // Sottoscrizione per verificare se l'utente è loggato
    this.commonService.isLogged.subscribe((res) => {
      this.isLogged = res;
    });
  }

  // Naviga alla pagina delle categorie con la categoria selezionata
  getAllCategories(category: Category) {
    localStorage.setItem('selectedCategory', JSON.stringify(category));
    this.router.navigateByUrl('/categories');
  }


  // Gestisce il clic sull'icona utente
  handleUserIconClick() {
    if (this.isLogged) {
      // Se l'utente è loggato, naviga nella pagina
      this.router.navigate(['/profilo']);
    } else {
      // Se l'utente non è loggato ,apri la modale della login
      const modalFactory = this.componentFactoryResolver.resolveComponentFactory(LoginComponent);
      const LoginComponentRef = modalFactory.create(this.viewContainerRef.injector);
      this.viewContainerRef.insert(LoginComponentRef.hostView);
    }
  }

  // Apre la modale di login
  openModal(): void {
    const modalFactory = this.componentFactoryResolver.resolveComponentFactory(LoginComponent);
    const LoginComponentRef = modalFactory.create(this.viewContainerRef.injector);
    this.viewContainerRef.insert(LoginComponentRef.hostView);
  }



  // Naviga alla pagina specificata
  goToPage(page: string) {
    this.router.navigateByUrl("product-list/" + page);
  }

  // Naviga alla pagina del carrello
  goToCart(page: string) {
    this.router.navigateByUrl('carrello');
  }

  // Naviga alla pagina dei preferiti
  goToFavorite(page: string) {
    this.router.navigateByUrl('preferiti');
  }

}