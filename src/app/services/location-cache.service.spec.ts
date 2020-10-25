import { TestBed } from '@angular/core/testing';

import { LocationCacheService } from './location-cache.service';

describe('LocationCacheService', () => {
  let service: LocationCacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationCacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
