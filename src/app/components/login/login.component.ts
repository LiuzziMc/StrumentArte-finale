import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  // isNavbarVisible: boolean = true; // Variabile per controllare la visibilità della navbar
  constructor(private commonService: CommonService, private router: Router) { }

  datiUtente: any = {};// Oggetto per memorizzare i dati dell'utente durante il login o la registrazione

   // Funzione per effettuare il login
  login(datiUtente: any) {
    this.commonService.login(datiUtente).subscribe((res) => {
      if (res && res.EMAIL) {
        this.commonService.isLogged.next(true);// Imposta lo stato di accesso a true
        this.router.navigate(['/dashboard']); // Naviga alla dashboard
        const pulsanteChiusura: any = document.getElementById('close-modal-access');
        pulsanteChiusura.click();// Chiudi la modale di accesso
      } else {
        alert('LOGIN FALLITA') // Mostra un avviso di login fallito
      }
    })

  }

   // Funzione per la registrazione
  register() {
    this.commonService.register(this.datiUtente)

      .subscribe({
        next: (res: any) => {
          if (res && res.successo) {
            this.commonService.isLogged.next(true);// Imposta lo stato di accesso a true
            this.router.navigate(['/dashboard']);// Naviga alla dashboard
            const pulsanteChiusura: any = document.getElementById('modal-access');
            pulsanteChiusura.click();// Chiudi la modale di accesso
            alert('REGISTRAZIONE AVVENUTA CON SUCCESSO');// Mostra un avviso di registrazione riuscit
          } else {
            alert('REGISTRAZIONE FALLITA');; // Mostra un avviso di registrazione fallita
          }
        },
        error: (error) => {
          console.error('Errore durante la registrazione:', error);
          alert('REGISTRAZIONE FALLITA');
          return of(null); // Ritorna un observable con null per continuare l'esecuzione
        }

      });
  }

   // Naviga alla pagina di recupero password
  goToPage(page: string) {
    this.router.navigateByUrl('recupero-password');
  }
  
}


