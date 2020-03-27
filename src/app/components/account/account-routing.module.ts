import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component'
import { ListComponent } from './list/list.component'
import { HistoryComponent } from './history/history.component'
import { TransactionComponent } from './transaction/transaction.component'

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'list', component: ListComponent },
  { path: 'add', component: AddComponent },
  { path: 'history/:id', component: HistoryComponent },
  { path: 'transaction/:id/:type', component: TransactionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
