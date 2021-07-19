import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Trip } from '../model/trip';

@Injectable({
  providedIn: 'root'
})
export class TripServiceService {

  private tripsUrl = 'api/trips'

  constructor( private http: HttpClient ) { }

  /** GET from the server*/
  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.tripsUrl)
      .pipe(
        tap(_ => console.log('fetched trips')),
        catchError(this.handleError<Trip[]>('getTrips', []))
      );
  }

  /** GET trip by id. Will 404 if id not found */
    getTrip(id: number): Observable<Trip> {
    const url = `${this.tripsUrl}/${id}`;
    return this.http.get<Trip>(url).pipe(
      tap(_ => console.log(`fetched trip id=${id}`)),
      catchError(this.handleError<Trip>(`getTrip id=${id}`))
    );
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

    /** PUT: update the trip on the server */
  updateTrip(trip: Trip): Observable<any> {
    return this.http.put(this.tripsUrl, trip, this.httpOptions).pipe(
      tap(_ => console.log(`updated trip id=${trip.id}`)),
      catchError(this.handleError<any>('updateTrip'))
    );
  }

  /** POST: add a new trip to the server */
  addTrip(trip: Trip): Observable<Trip> {
    return this.http.post<Trip>(this.tripsUrl, trip, this.httpOptions).pipe(
      tap((newTrip: Trip) => console.log(`added trip w/ id=${newTrip.id}`)),
      catchError(this.handleError<Trip>('addTrip'))
    );
  }

  /** DELETE: delete the trip from the server */
  deleteTrip(id: number): Observable<Trip> {
    const url = `${this.tripsUrl}/${id}`;

    return this.http.delete<Trip>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted trip id=${id}`)),
      catchError(this.handleError<Trip>('deleteTrip'))
    );
  }


  /* GET trips whose name contains search term */
  searchTrips(term: string): Observable<Trip[]> {
    if (!term.trim()) {
      // if not search term, return all.
      return this.getTrips();
    }
    //l'url include una stringa di query con il termine di ricerca.
    return this.http.get<Trip[]>(`${this.tripsUrl}/?title=${term}`).pipe(
      tap(x => x.length ?
         console.log(`found trips matching "${term}"`) :
         console.log(`no trips matching "${term}"`)),
      catchError(this.handleError<Trip[]>('searchTrips', []))
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
