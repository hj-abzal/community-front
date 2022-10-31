import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetControlComponent } from './budget-control.component';
import {BudgetControlRoutingModule} from "./budget-control-routing.module";



@NgModule({
  declarations: [
    BudgetControlComponent
  ],
  imports: [
    CommonModule,
    BudgetControlRoutingModule
  ]
})
export class BudgetControlModule { }
