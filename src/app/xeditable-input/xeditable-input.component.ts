import {Component, OnInit, Input, Injector} from '@angular/core';

@Component({
  selector: 'app-xeditable-input',
  templateUrl: './xeditable-input.component.html',
  styleUrls: ['./xeditable-input.component.css']
})
export class XeditableInputComponent implements OnInit {

  @Input() default: string;

  constructor(injector: Injector) { }


  ngOnInit() {
  }

}
