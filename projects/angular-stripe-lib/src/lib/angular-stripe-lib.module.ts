import { NgModule, ModuleWithProviders } from '@angular/core';
import { AngularStripeLibComponent } from './angular-stripe-lib.component';
import { StripeInstanceOptions, STRIPE_PUBLISHABLE_KEY, STRIPE_OPTIONS } from './Types';
import { StripeScriptTag } from './services/stripe-script-tag.service';
import { StripeBank } from './components/stripe-bank/stripe-bank.component';
import { StripeCard } from './components/stripe-card/stripe-card.component';
import { StripeSource } from './components/stripe-source/stripe-source.component';

@NgModule({
  declarations: [AngularStripeLibComponent, StripeBank, StripeCard, StripeSource],
  imports: [
  ],
  exports: [AngularStripeLibComponent]
})
export class AngularStripeModule {
  static forRoot(publishableKey?: string, options?: StripeInstanceOptions): ModuleWithProviders<AngularStripeModule> {
    return {
      ngModule: AngularStripeModule,
      providers: [
        StripeScriptTag,
        {
          provide: STRIPE_PUBLISHABLE_KEY,
          useValue: publishableKey
        },
        {
          provide: STRIPE_OPTIONS,
          useValue: options
        }
      ],
    }
  }
}
