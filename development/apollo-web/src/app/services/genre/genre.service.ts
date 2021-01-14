import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Genre } from 'src/app/domains/genre';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private http: HttpClient) { }

  private errorHandler(error: Error | any): Observable<any> {
    console.log(error);
    return of(null);
  }

  getAll(): Observable<Array<Genre>>  {
    return this.http.get<Genre>(`${environment.server}/genre`)
    .pipe(catchError(this.errorHandler));
  }

  update(genre: Genre): Observable<Genre> {
    return this.http.put<Genre>(`${environment.server}/genre`, genre)
    .pipe(catchError(this.errorHandler));
  }

  create(genre: Genre): Observable<any> {
    return this.http.post<Genre>(`${environment.server}/genre`, genre)
    .pipe(catchError(this.errorHandler));
  }

}
