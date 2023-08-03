import { Component } from '@angular/core';
import { faFacebook, faFacebookF, faGoogle, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faArrowPointer, faClock, faCreditCard, faPhoneVolume, faShieldHalved, faTruck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  //Icone utilizzate
  faFacebookF = faFacebookF;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faGoogle = faGoogle;
  faLinkedin = faLinkedin;
  faTruck = faTruck;
  faClock = faClock;
  faArrowPointer = faArrowPointer;
  faShieldHalved = faShieldHalved;
  faPhoneVolume = faPhoneVolume;
  faCreditCard = faCreditCard;


}
