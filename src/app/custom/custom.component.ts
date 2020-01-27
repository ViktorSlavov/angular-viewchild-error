import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { CustomDirective } from '../custom-directive/custom.directive';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {
  private _id: string;

  @ViewChild(CustomDirective, { read: CustomDirective, static: true })
  private directive: CustomDirective;

  @Input()
  public get id(): string {
    return this._id;
  }

  public set id(val: string) {
    this._id = val;
    this.directive.id = val;
  }

  constructor() { }

  ngOnInit() {
  }

}
