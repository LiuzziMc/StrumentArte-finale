import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselMarchiComponent } from './carousel-marchi.component';

describe('CarouselMarchiComponent', () => {
  let component: CarouselMarchiComponent;
  let fixture: ComponentFixture<CarouselMarchiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselMarchiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselMarchiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
