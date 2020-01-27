import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  @Input()
  public id = "test";

  constructor() { }

}
