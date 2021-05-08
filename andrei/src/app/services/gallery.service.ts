import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Image } from '../model/image';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  public album: Array<Image> = [];

  constructor(private http: HttpClient) { }

  setAlbum(callbackAlbum, albumID: string){
    return this.http.get<Array<Image>>(`http://localhost:3000/gallery/${albumID}`
    ).subscribe((response) => {
      this.album = [];
      Object.values(response).forEach((img) => {
        this.album.push(new Image(img['src'], img['srct'], img['title']));
        callbackAlbum(this.album);
      });
      console.log("http get all images successful");
      console.log(this.album[0]);
    });

    // ).pipe(
    //   tap(_ => console.log('fetched album')),
    //   catchError(this.handleError<Array<[any, any, any]>>('getAlbum', []))
    // );
  }

  // getAlbum(albumID: string){
  //   return this.http.get<Array<Image>>(`http://localhost:3000/gallery/${albumID}`,
  //   {responseType: 'json'})
  //   .pipe(
  //     tap(_ => console.log('fetched album', this.album[0])),
  //     catchError(this.handleError<Array<Image>>('getAlbum', []))
  //   );
  // }

  getAlbum(): Array<Image>{
    return this.album;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
  
      console.log(`${operation} failed: ${error.message}`);
  
      return of(result as T);
    };
  }
}
