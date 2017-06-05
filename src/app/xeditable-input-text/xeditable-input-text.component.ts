import {Component, OnInit, Injector} from '@angular/core';
import {XeditableInputComponent} from "../xeditable-input/xeditable-input.component";

@Component({
  selector: 'app-xeditable-input-text',
  templateUrl: './xeditable-input-text.component.html',
  styleUrls: ['./xeditable-input-text.component.css']
})
export class XeditableInputTextComponent extends XeditableInputComponent  {

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
  }

}
