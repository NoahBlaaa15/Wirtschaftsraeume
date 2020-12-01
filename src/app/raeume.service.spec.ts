import { TestBed } from '@angular/core/testing';

import { RaeumeService } from './raeume.service';

describe('RaeumeService', () => {
  let service: RaeumeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RaeumeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
