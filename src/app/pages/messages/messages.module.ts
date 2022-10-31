import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages.component';
import {MessagesRoutingModule} from "./messages-routing.module";



@NgModule({
  declarations: [
    MessagesComponent
  ],
  imports: [
    CommonModule,
    MessagesRoutingModule
  ]
})
export class MessagesModule { }
