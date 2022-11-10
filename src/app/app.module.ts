import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SHARED_STAND_ALONE_COMPONENTS} from "./shared/components";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SHARED_STAND_ALONE_COMPONENTS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
