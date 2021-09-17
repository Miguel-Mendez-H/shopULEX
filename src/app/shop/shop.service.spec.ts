import { TestBed } from '@angular/core/testing';

import { ShopServices } from './shop.service';

describe('ShopService', () => {
  let service: ShopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
