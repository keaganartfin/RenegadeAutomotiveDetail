import { TestBed } from '@angular/core/testing';

import { SimplyBookService } from './simply-book.service';

describe('SimplyBookService', () => {
  let service: SimplyBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimplyBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
