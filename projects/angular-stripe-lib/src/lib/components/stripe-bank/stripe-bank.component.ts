import {
  Input, Output, EventEmitter, Component
} from "@angular/core"
import { StripeCardOptions } from "../../Types";
import { StripeComponent } from "../StripeComponent";
import { StripeToken } from "../../Types";
import { StripeScriptTag } from "../../services/stripe-script-tag.service";

export interface bank_account{
  country             : string
  currency            : string
  routing_number      : string
  account_number      : string
  account_holder_name : string
  account_holder_type : string
}

@Component({
  selector: 'stripe-bank',
  templateUrl: './stripe-bank.component.html',
  styleUrls: ['./stripe-bank.component.css']
})

export class StripeBank extends StripeComponent{
  @Input() options!: StripeCardOptions//very similar type to card options

  @Input() token!:StripeToken
  @Output() tokenChange:EventEmitter<StripeToken> = new EventEmitter()

  constructor(
    public StripeScriptTag:StripeScriptTag
  ){
    super(StripeScriptTag)
  }

  createToken( data?:any ):Promise<StripeToken>{
    delete this.invalid
    this.invalidChange.emit(this.invalid)

    return this.stripe.createToken('bank_account', data)
    .then((result:any)=>{
      if(result.error){
        if( result.error.type=="validation_error" ){
          this.invalidChange.emit( this.invalid=result.error )
        }else{
          this.catcher.emit(result.error)
          throw result.error
        }
      }else{
        this.tokenChange.emit(this.token=result.token)
        return result.token
      }
    })
  }
}
