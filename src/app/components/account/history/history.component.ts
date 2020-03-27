import { Component, OnInit } from '@angular/core';

import { Transaction } from './../../../model/transaction'
import { HistoryService } from './../../../services/history.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
  providers: [HistoryService]
})
export class HistoryComponent implements OnInit {

  private transactions: Transaction[] = [];
  private id: string;
  private errorMessage: string;

  constructor(private service: HistoryService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.getHistory(Number(this.id));
  }

  public getHistory(idAccount: number) {
    this.service.getHistory(idAccount).subscribe(
      response => {
        console.log(response);
        this.transactions = response;
      },
      error => {
        this.errorMessage = <any>error;
      }
    );
  }
}
