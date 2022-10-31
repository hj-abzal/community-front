import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersComponent } from './members.component';
import {MembersRoutingModule} from "./members-routing.module";



@NgModule({
  declarations: [
    MembersComponent
  ],
  imports: [
    CommonModule,
    MembersRoutingModule
  ]
})
export class MembersModule { }
