import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OmdbService } from './api/omdb.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    OmdbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
