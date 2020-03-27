import { Injectable } from '@angular/core';

import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Global } from './../config/global'
import { Account } from './../model/account'

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

export class AccountService {

  constructor(private http: HttpClient) { }

  public getAccount(): Observable<Account[]> {
    return this.http.get<Account[]>(Global.url +  "account/listar", httpOptions).pipe(
      catchError(this.handleError('getAccount', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
