import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  public album: Array<[any, any, any]> = [];

  constructor(private http: HttpClient) { }

  setAlbum(callbackAlbum, albumID: string){
    return this.http.get<Array<[any, any, any]>>(`http://localhost:3000/gallery/${albumID}`
    ).subscribe((response) => {
      Object.values(response).forEach((image) => {
        this.album.push(image);
        callbackAlbum(this.album);
      });
      console.log("http get all images successful");
    });

    // ).pipe(
    //   tap(_ => console.log('fetched album')),
    //   catchError(this.handleError<Array<[any, any, any]>>('getAlbum', []))
    // );
  }

  getAlbum(): Array<[any, any, any]>{
    return this.album;
  }

  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  //     console.error(error); // log to console instead
  
  //     console.log(`${operation} failed: ${error.message}`);
  
  //     return of(result as T);
  //   };
  // }
}
