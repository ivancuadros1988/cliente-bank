import { Injectable } from '@angular/core';

import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Global } from './../config/global'
import { Transaction } from './../model/transaction'

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
    }
  )
};

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private http: HttpClient) { }

  public getHistory(idAccount: number): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(Global.url + "historical/trasaction/" + idAccount, httpOptions).pipe(
      catchError(this.handleError('getHistory', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
