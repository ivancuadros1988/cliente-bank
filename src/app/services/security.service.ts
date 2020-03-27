import { Injectable } from '@angular/core';

import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Global } from './../config/global'
import { User } from './../model/user'

const httpOptions = {
  headers: new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .set("Authorization", `Basic ${window.btoa("weborders:123456")}`)
    .set('content', 'application/json'),
  observe: 'response' as 'response'
};

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  private urlService = Global.url + 'security/oauth/token';

  constructor(private http: HttpClient) { }

  public getToken(user: User): Observable<any> {

    console.log(user);
    const body  = new HttpParams()
        .set('username', user.username)
        .set('password', user.password)
        .set('grant_type', "password");
    console.log(body.toString());

    return this.http.post<any>(this.urlService, body.toString(), httpOptions).pipe(
      map((res: HttpResponse<any>) => {
        //console.log("RESPUESTA");
        //console.log(res.body.access_token);
        // if (res.headers.has("Authorization")) {
        user.token = res.body.access_token;//res.headers.get("Authorization");
        //localStorage.setItem('token', 'Bearer ' + res.headers.get("Authorization"));
        localStorage.setItem('token', 'Bearer ' + res.body.access_token);
        // }
        return user;
      }),
      catchError(this.handleError))
  }

  private handleError(error: any) {
    console.log("securityService error", error);
    return throwError("lanzando error: " + error);
  }
}
