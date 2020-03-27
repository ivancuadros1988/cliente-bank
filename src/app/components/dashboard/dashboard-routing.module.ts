import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component'

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      {
        path: '', 
        loadChildren: '../home/home.module#HomeModule'
      },
      {
        path: 'account', 
        loadChildren: '../account/account.module#AccountModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
