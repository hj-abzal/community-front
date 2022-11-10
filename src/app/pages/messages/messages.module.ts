import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages.component';
import {MessagesRoutingModule} from "./messages-routing.module";
import {SHARED_STAND_ALONE_COMPONENTS} from "../../shared/components";



@NgModule({
  declarations: [
    MessagesComponent
  ],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    SHARED_STAND_ALONE_COMPONENTS
  ]
})
export class MessagesModule { }
