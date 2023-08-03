import { Component } from '@angular/core';
import { faArrowRight, faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons';
import KeenSlider, { KeenSliderInstance } from "keen-slider"

@Component({
  selector: 'app-carousel-marchi',
  templateUrl: './carousel-marchi.component.html',
  styleUrls: ['./carousel-marchi.component.scss']
})
export class CarouselMarchiComponent {
//Icone utilizzate
  faArrowRight = faArrowRight;
  faExpandArrowsAlt = faExpandArrowsAlt
}
