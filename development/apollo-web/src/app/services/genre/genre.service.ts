import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Genre } from 'src/app/domains/genre';
import { environment } from 'src/environments/environment';
import { errorHandler } from '../handler/error';
import { successHandler } from '../handler/success';
import { SnackbarMessageService } from '../snackbar-message/snackbar-message.service';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private http: HttpClient, private snackbarMessage: SnackbarMessageService) { }

  getAll(): Observable<Array<Genre>>  {
    return this.http.get<Genre>(`${environment.server}/genre`)
    .pipe(catchError((err => errorHandler(err, "genre", this.snackbarMessage))));
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
