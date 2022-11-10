import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetControlComponent } from './budget-control.component';
import {BudgetControlRoutingModule} from "./budget-control-routing.module";
import {SHARED_STAND_ALONE_COMPONENTS} from "../../shared/components";



@NgModule({
  declarations: [
    BudgetControlComponent
  ],
  imports: [
    CommonModule,
    BudgetControlRoutingModule,
    SHARED_STAND_ALONE_COMPONENTS
  ]
})
export class BudgetControlModule { }
