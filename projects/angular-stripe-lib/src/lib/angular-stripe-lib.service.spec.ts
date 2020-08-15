import { TestBed } from '@angular/core/testing';

import { AngularStripeLibService } from './angular-stripe-lib.service';

describe('AngularStripeLibService', () => {
  let service: AngularStripeLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularStripeLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
