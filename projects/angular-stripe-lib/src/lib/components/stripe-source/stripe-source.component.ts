import {
  Input, Output, EventEmitter, Component
} from "@angular/core"
import {
  StripeToken, StripeSource as StripeSourceType
} from "../../Types";
import { StripeScriptTag } from "../../services/stripe-script-tag.service";
import { StripeComponent } from "../StripeComponent";


@Component({
  selector: 'stripe-source',
  templateUrl: './stripe-source.component.html',
  styleUrls: ['./stripe-source.component.css'],
})
 
export class StripeSource extends StripeComponent{

  @Input() source!:StripeSourceType
  @Output() sourceChange:EventEmitter<StripeSourceType> = new EventEmitter()

  elements:any

  constructor(
    public StripeScriptTag:StripeScriptTag
  ){
    super(StripeScriptTag)
  }

  createSource():Promise<StripeToken>{
    delete this.invalid
    this.invalidChange.emit(this.invalid)

    return this.stripe.createSource(
      this.elements
    )
    .then((result:any)=>{
      if(result.error){
        if( result.error.type=="validation_error" ){
          this.invalidChange.emit( this.invalid=result.error )
        }else{
          this.catcher.emit(result.error)
          throw result.error
        }
      }else{
        this.sourceChange.emit(this.source=result.source)
        return result.source
      }
    })
  }
}
