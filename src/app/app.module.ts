import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { PrimoPianoComponent } from './pages/primo-piano/primo-piano.component';
import { CarouselHomeComponent } from './components/carousel-home/carousel-home.component';
import { ChiSiamoComponent } from './pages/chi-siamo/chi-siamo.component';
import { InfoComponent } from './pages/info/info.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { LoginComponent } from './components/login/login.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselMarchiComponent } from './components/carousel-marchi/carousel-marchi.component';
import { CarrelloComponent } from './pages/carrello/carrello.component';
import { ScrollTopDownComponent } from './components/scroll-top-down/scroll-top-down.component';
import { ProductComponent } from './components/product/product.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { ProfiloComponent } from './pages/profilo/profilo.component';
import { PreferitiComponent } from './pages/preferiti/preferiti.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { OrderHistoryComponent } from './pages/order-history/order-history.component';
import { RecuperoPasswordComponent } from './pages/recupero-password/recupero-password.component'; 




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    FooterComponent,
    PrimoPianoComponent,
    CarouselHomeComponent,
    ChiSiamoComponent,
    InfoComponent,
    AboutUsComponent,
    LoginComponent,
    CarouselComponent,
    CarouselMarchiComponent,
    CarrelloComponent,
    ScrollTopDownComponent,
    ProductComponent,
    CheckoutComponent,
    ProfiloComponent,
    PreferitiComponent,
    ProductListComponent,
    OrderHistoryComponent,
    RecuperoPasswordComponent,
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
