import { TestBed, async } from '@angular/core/testing';

import {AppComponent} from './app.component';
import {XeditableComponent} from "./xeditable/xeditable.component";
import {FormsModule} from "@angular/forms";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        XeditableComponent
      ],
      imports: [ FormsModule ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
