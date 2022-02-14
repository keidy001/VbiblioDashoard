import { TestBed } from '@angular/core/testing';

import { LivreserviceService } from './livreservice.service';

describe('LivreserviceService', () => {
  let service: LivreserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivreserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
