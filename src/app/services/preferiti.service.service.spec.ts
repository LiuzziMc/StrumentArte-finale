import { TestBed } from '@angular/core/testing';

import { PreferitiServiceService } from './preferiti.service';

describe('PreferitiServiceService', () => {
  let service: PreferitiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreferitiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
