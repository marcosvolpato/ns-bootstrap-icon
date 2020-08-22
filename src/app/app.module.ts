import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NsBootstrapIconModule } from 'projects/ns-bootstrap-icon/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NsBootstrapIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
