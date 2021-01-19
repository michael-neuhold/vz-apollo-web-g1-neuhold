import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl, identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { catchError, tap } from 'rxjs/operators';
import { MovieDetail } from 'src/app/domains/movie';
import { environment } from 'src/environments/environment';
import { errorHandler } from '../handler/error';
import { successHandler } from '../handler/success';
import { SnackbarMessageService } from '../snackbar-message/snackbar-message.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient, private snackbarMessage: SnackbarMessageService) { }

  getAll() : Observable<MovieDetail[]> {
    return this.http.get<MovieDetail>(`${environment.server}/movie`)
    .pipe(catchError((err => errorHandler(err, "movies", this.snackbarMessage))));
  }

  getById_(id: number) : Observable<MovieDetail>  {
    return this.http.get<MovieDetail>(`${environment.server}/movie/${id}`);
  }

  getById(id: number) : Observable<MovieDetail>  {
    return this.http.get<MovieDetail>(`${environment.server}/movie/${id}`)
    .pipe(catchError((err => errorHandler(err, "movie", this.snackbarMessage))));
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${environment.server}/movie/${id}`)
    .pipe(
      tap(() => successHandler("movie delete", this.snackbarMessage)),
      catchError((err => errorHandler(err, "movie", this.snackbarMessage))
    ));
  }

  create(movie: MovieDetail): Observable<any> {
    return this.http.post<MovieDetail>(`${environment.server}/movie`, movie)
    .pipe(
      tap(() => successHandler("movie create", this.snackbarMessage)),
      catchError((err => errorHandler(err, "movie", this.snackbarMessage))
    ));
  }

}


