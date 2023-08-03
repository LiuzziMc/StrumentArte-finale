import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.scss']
})
export class ProfiloComponent {
  constructor(private elementRef: ElementRef) { }


  // Definizione della funzione scrollToElement con un parametro elementId di tipo stringa
  scrollToElement(elementId: string): void {
    // Utilizza il servizio ElementRef per ottenere un riferimento all'elemento HTML tramite il suo ID
    const element = this.elementRef.nativeElement.querySelector(`#${elementId}`);
    // Verifica se l'elemento è stato trovato
    if (element) {
      // Utilizza il metodo scrollIntoView per far scorrere la pagina fino all'elemento
      // La proprietà behavior: 'smooth' abilita lo scorrimento fluido anziché istantaneo
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
