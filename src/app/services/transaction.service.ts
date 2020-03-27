import { Injectable } from '@angular/core';

import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Global } from './../config/global'
import { Transaction } from './../model/transaction'

import {formatDate} from '@angular/common';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
    }
  ),
  observe: 'response' as 'response'
};

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private method: string = "deposit/v1/depositevent";

  constructor(private http: HttpClient) { }

  public runTransaction(transaction: Transaction): Observable<any> {

    
    if (transaction.type != 'Deposit') {
      this.method = 'withdrawal/v1/withdrawalevent'
      transaction.type = "retiro"
    }
    else{
      transaction.type = "deposito"
    }
    transaction.creationDate = formatDate(new Date(), 'dd/MM/yyyy', 'en');//"24/11/2020";
    //console.log(JSON.stringify(transaction));
    return this.http.post<Transaction[]>(Global.url +  this.method,
      JSON.stringify(transaction),
      httpOptions).pipe(
        map((res: HttpResponse<any>) => {
          console.log(res);
          if(res.status != 201){            
            throw new Error(`El ${transaction.type} no se ha podido realizar`);
          }
          return res;
        }),
        catchError(this.handleError('runTransaction', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
