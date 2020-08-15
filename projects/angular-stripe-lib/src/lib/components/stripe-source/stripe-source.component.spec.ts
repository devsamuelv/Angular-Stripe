import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StripeSource } from './stripe-source.component';

describe('StripeSourceComponent', () => {
  let component: StripeSource;
  let fixture: ComponentFixture<StripeSource>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StripeSource ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StripeSource);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
