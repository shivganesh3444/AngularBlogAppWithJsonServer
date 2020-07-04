import { TestBed } from '@angular/core/testing';

import { FoodpostsService } from './foodposts.service';

describe('FoodpostsService', () => {
  let service: FoodpostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodpostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
