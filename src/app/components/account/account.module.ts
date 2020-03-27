import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { HistoryComponent } from './history/history.component';
import { TransactionComponent } from './transaction/transaction.component';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [ListComponent, AddComponent, HistoryComponent, TransactionComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    FormsModule
  ]
})
export class AccountModule { }
