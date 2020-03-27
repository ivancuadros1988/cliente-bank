import { Component, OnInit } from '@angular/core';

import { Account } from './../../../model/account'
import { AccountService } from './../../../services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [AccountService]
})
export class ListComponent implements OnInit {

  public accounts: Account[] = [];
  private errorMessage: string;

  constructor(private router: Router, private service: AccountService) { }

  ngOnInit() {
    this.getAccount();
  }

  public getAccount() {
    this.service.getAccount().subscribe(
      servicios => {
        console.log(servicios);
        this.accounts = servicios;
      },
      error => {
        this.errorMessage = <any>error;
      }
    );
  }

  public redirectHistory(idAccount: number) {
    this.router.navigate(['/dashboard/account/history/' + idAccount]);
    return true;
  }

  public redirectTransaction(idAccount: number, type: string) {
    this.router.navigate(['/dashboard/account/transaction/' + idAccount + '/' + type]);
    return true;
  }

}
