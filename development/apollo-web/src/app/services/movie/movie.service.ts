import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { catchError } from 'rxjs/operators';
import { MovieDetail } from 'src/app/domains/movie';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  private errorHandler(error: Error | any): Observable<any> {
    console.log(error);
    return of(null);
  }

  getAll() : Observable<MovieDetail[]> {
    return this.http.get<MovieDetail>(`${environment.server}/movie`)
    .pipe(
      catchError(this.errorHandler)
    );
  }

  getById(id) : Observable<MovieDetail>  {
    return this.http.get<MovieDetail>(`${environment.server}/movie/${id}`)
    .pipe(
      catchError(this.errorHandler)
    );
  }
}


