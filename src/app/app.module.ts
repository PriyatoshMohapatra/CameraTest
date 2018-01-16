import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WebCamComponent } from './lib/webcam/webcam.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, WebCamComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
