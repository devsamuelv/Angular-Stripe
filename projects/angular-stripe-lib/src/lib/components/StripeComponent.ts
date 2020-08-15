import { Input, Output, EventEmitter, Directive } from "@angular/core"
import {
  StripeInstance
} from "../Types"
import { StripeScriptTag } from "../services/stripe-script-tag.service"

@Directive()
export class StripeComponent{
  @Output("catch") catcher:EventEmitter<Error> = new EventEmitter()

  @Input() invalid!:Error
  @Output() invalidChange:EventEmitter<Error> = new EventEmitter()

  stripe!:StripeInstance

  constructor(
    public StripeScriptTag:StripeScriptTag
  ){}

  ngOnInit(){
    this.init()
  }

  init():Promise<StripeInstance>{
    return this.StripeScriptTag.promiseInstance()
    .then( i=>this.stripe=i )
  }
}