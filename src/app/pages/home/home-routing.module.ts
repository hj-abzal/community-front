import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'members',
        loadChildren: () =>  import('../members/members.module').then(m => m.MembersModule)
      },
      {
        path: 'budget-control',
        loadChildren: () =>  import('../budget-control/budget-control.module').then(m => m.BudgetControlModule)
      },
      {
        path: 'messages',
        loadChildren: () =>  import('../messages/messages.module').then(m => m.MessagesModule)
      },
      { path: '', redirectTo: 'members', pathMatch: 'full' },
      { path: '**', redirectTo: 'members' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
