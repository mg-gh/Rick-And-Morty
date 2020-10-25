import { TestBed } from '@angular/core/testing';

import { CharacterCacheService } from './character-cache.service';

describe('CharacterCacheService', () => {
  let service: CharacterCacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterCacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
