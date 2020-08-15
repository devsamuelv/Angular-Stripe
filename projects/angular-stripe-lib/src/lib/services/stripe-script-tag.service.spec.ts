import { TestBed } from '@angular/core/testing';

import { StripeScriptTag } from '../services/stripe-script-tag.service';

describe('StripeScriptTagService', () => {
  let service: StripeScriptTag;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StripeScriptTag);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
