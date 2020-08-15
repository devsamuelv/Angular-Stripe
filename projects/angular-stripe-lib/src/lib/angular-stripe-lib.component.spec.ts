import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularStripeLibComponent } from './angular-stripe-lib.component';

describe('AngularStripeLibComponent', () => {
  let component: AngularStripeLibComponent;
  let fixture: ComponentFixture<AngularStripeLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularStripeLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularStripeLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
