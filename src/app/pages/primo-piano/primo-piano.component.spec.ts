import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimoPianoComponent } from './primo-piano.component';

describe('PrimoPianoComponent', () => {
  let component: PrimoPianoComponent;
  let fixture: ComponentFixture<PrimoPianoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimoPianoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimoPianoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
