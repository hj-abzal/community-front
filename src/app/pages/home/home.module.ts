import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {HomeRoutingModule} from "./home-routing.module";
import {SHARED_STAND_ALONE_COMPONENTS} from "../../shared/components";
import {HOME_STAND_ALONE_COMPONENTS} from "./components";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SHARED_STAND_ALONE_COMPONENTS,
    HOME_STAND_ALONE_COMPONENTS
  ]
})
export class HomeModule { }
