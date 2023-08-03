import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PrimoPianoComponent } from './pages/primo-piano/primo-piano.component';
import { ChiSiamoComponent } from './pages/chi-siamo/chi-siamo.component';
import { InfoComponent } from './pages/info/info.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CarrelloComponent } from './pages/carrello/carrello.component';
import { ProductComponent } from './components/product/product.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ProfiloComponent } from './pages/profilo/profilo.component';
import { PreferitiComponent } from './pages/preferiti/preferiti.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { RecuperoPasswordComponent } from './pages/recupero-password/recupero-password.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'primo-piano', component: PrimoPianoComponent },
  { path: 'chi-siamo', component: ChiSiamoComponent },
  { path: 'info', component: InfoComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'carrello', component: CarrelloComponent },
  { path: 'product', component: ProductComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'profilo', component: ProfiloComponent },
  { path: 'preferiti', component: PreferitiComponent },
  { path: 'product-list/:categoria', component: ProductListComponent },
  { path: 'recupero-password', component: RecuperoPasswordComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
