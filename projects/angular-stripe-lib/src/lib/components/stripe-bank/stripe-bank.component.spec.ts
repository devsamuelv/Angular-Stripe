import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StripeBank } from './stripe-bank.component';

describe('StripeBankComponent', () => {
  let component: StripeBank;
  let fixture: ComponentFixture<StripeBank>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StripeBank ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StripeBank);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
