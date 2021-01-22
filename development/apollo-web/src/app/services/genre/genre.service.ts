import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Genre } from 'src/app/domains/genre';
import { environment } from 'src/environments/environment';
import { BasisService } from '../basis/basis-service';
import { errorHandler } from '../handler/error';
import { successHandler } from '../handler/success';
import { SnackbarMessageService } from '../snackbar-message/snackbar-message.service';

@Injectable({
  providedIn: 'root'
})
export class GenreService implements BasisService {

  constructor(private http: HttpClient, private snackbarMessage: SnackbarMessageService) { }

  getAll(): Observable<Genre[]>  {
    return this.http.get<Genre>(`${environment.server}/genre`)
    .pipe(catchError((err => errorHandler(err, "genre", this.snackbarMessage))));
  }

  getById_(genreId: number): Observable<Genre> {
    return this.http.get<Genre>(`${environment.server}/genre/${genreId}`);
  }

  update(genre: Genre): Observable<Genre> {
    return this.http.put<Genre>(`${environment.server}/genre`, genre)
    .pipe(
      tap(() => successHandler("genre updated", this.snackbarMessage)),
      catchError((err => errorHandler(err, "genre", this.snackbarMessage))
    ));
  }

  create(genre: Genre): Observable<any> {
    return this.http.post<Genre>(`${environment.server}/genre`, genre)
    .pipe(
      tap(() => successHandler("genre created", this.snackbarMessage)),
      catchError((err => errorHandler(err, "genre", this.snackbarMessage))
    ));
  }

}
