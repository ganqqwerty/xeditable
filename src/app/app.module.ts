import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { XeditableComponent } from './xeditable/xeditable.component';
import { XeditableInputComponent } from './xeditable-input/xeditable-input.component';
import { XeditableInputTextComponent } from './xeditable-input-text/xeditable-input-text.component';

@NgModule({
  declarations: [
    AppComponent,
    XeditableComponent,
    XeditableInputComponent,
    XeditableInputTextComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
