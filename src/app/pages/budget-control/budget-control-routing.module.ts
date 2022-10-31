import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {BudgetControlComponent} from "./budget-control.component";

const routes: Routes = [
  {path: '', component: BudgetControlComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetControlRoutingModule { }
