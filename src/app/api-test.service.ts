import { Injectable } from '@angular/core';
import { Now } from './now';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiTestService {
  private apiUrl = 'https://www.enricofrison.cloud/api/v1/'; // URL to web api

  getNow() : Observable<Now> {
    console.log('getNow()');
    return this.http.get<Now>(this.apiUrl)
    .pipe(
      tap(_ => console.log('fetched now')),
      catchError(this.handleError<Now>('getNow', undefined))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      //TODO: send the error to remove logging infratstructure
      console.error(error); // log to console insetead

      //TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result
      return of(result as T);
    }
  }

  constructor(
    private http: HttpClient) { }
}
