import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Transfert } from '../model/transfert';

@Injectable({
  providedIn: 'root'
})
export class TransfertService {
  private trasfUrl = 'api/transferts'

  constructor( private http: HttpClient ) { }

  /** GET from the server*/
  getTransferts(): Observable<Transfert[]> {
    return this.http.get<Transfert[]>(this.trasfUrl)
      .pipe(
        tap(_ => console.log('fetched Transferts')),
        catchError(this.handleError<Transfert[]>('getTransferts', []))
      );
  }

  /** GET Transfert by id. Will 404 if id not found */
    getTransfert(id: number): Observable<Transfert> {
    const url = `${this.trasfUrl}/${id}`;
    return this.http.get<Transfert>(url).pipe(
      tap(_ => console.log(`fetched Transfert id=${id}`)),
      catchError(this.handleError<Transfert>(`getTransfert id=${id}`))
    );
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

    /** PUT: update the Transfert on the server */
  updateTransfert(Transfert: Transfert): Observable<any> {
    return this.http.put(this.trasfUrl, Transfert, this.httpOptions).pipe(
      tap(_ => console.log(`updated Transfert id=${Transfert.id}`)),
      catchError(this.handleError<any>('updateTransfert'))
    );
  }

  /** POST: add a new Transfert to the server */
  addTransfert(Transfert: Transfert): Observable<Transfert> {
    return this.http.post<Transfert>(this.trasfUrl, Transfert, this.httpOptions).pipe(
      tap((newTransfert: Transfert) => console.log(`added Transfert w/ id=${newTransfert.id}`)),
      catchError(this.handleError<Transfert>('addTransfert'))
    );
  }

  /** DELETE: delete the Transfert from the server */
  deleteTransfert(id: number): Observable<Transfert> {
    const url = `${this.trasfUrl}/${id}`;

    return this.http.delete<Transfert>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted Transfert id=${id}`)),
      catchError(this.handleError<Transfert>('deleteTransfert'))
    );
  }


  /* GET Transferts whose name contains search term */
  searchTransferts(term: string): Observable<Transfert[]> {
    if (!term.trim()) {
      // if not search term, return all.
      return this.getTransferts();
    }
    //l'url include una stringa di query con il termine di ricerca.
    return this.http.get<Transfert[]>(`${this.trasfUrl}/?dest=${term}`).pipe(
      tap(x => x.length ?
         console.log(`found Transferts matching "${term}"`) :
         console.log(`no Transferts matching "${term}"`)),
      catchError(this.handleError<Transfert[]>('searchTransferts', []))
    );
  }

    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };

  }

}
