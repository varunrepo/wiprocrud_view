import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = environment.url;

  constructor(private http: HttpClient) { }
  public createUser(data: any): Observable<any> {

    return this.http.post<any>(`${this.baseURL}/`, data).pipe(
      
      map(res => {
        return res;
      }),
      catchError((e: any) => {
        return throwError(e);
      })
    );
  }

  public getUser(): Observable<any> {

    return this.http.get<any>(`${this.baseURL}/list`).pipe(
      
      map(res => {
        return res;
      }),
      catchError((e: any) => {
        return throwError(e);
      })
    );
  }
}
