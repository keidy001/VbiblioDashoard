import { TestBed } from '@angular/core/testing';

import { LibrairyService } from './librairy.service';

describe('LibrairyService', () => {
  let service: LibrairyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibrairyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
