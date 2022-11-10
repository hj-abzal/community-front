import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersComponent } from './members.component';
import {MembersRoutingModule} from "./members-routing.module";
import {SHARED_STAND_ALONE_COMPONENTS} from "../../shared/components";



@NgModule({
  declarations: [
    MembersComponent
  ],
  imports: [
    CommonModule,
    MembersRoutingModule,
    SHARED_STAND_ALONE_COMPONENTS
  ]
})
export class MembersModule { }
