import { TestBed } from '@angular/core/testing';

import { EpisodeCacheService } from './episode-cache.service';

describe('EpisodeCacheService', () => {
  let service: EpisodeCacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EpisodeCacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
