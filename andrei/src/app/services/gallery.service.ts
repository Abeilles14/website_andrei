import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http: HttpClient) { }

  getAlbum(albumID: string): Observable<Array<[any, any, any]>> {
    return this.http.get<Array<[any, any, any]>>(`http://localhost:3000/gallery/${albumID}`
    ).pipe(
      tap(_ => console.log('fetched album')),
      catchError(this.handleError<Array<[any, any, any]>>('getAlbum', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
  
      console.log(`${operation} failed: ${error.message}`);
  
      return of(result as T);
    };
  }
}
