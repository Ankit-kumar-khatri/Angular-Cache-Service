import { TestBed } from '@angular/core/testing';

import { CustomcacheService } from './customcache.service';

describe('CustomcacheService', () => {
  let service: CustomcacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomcacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
