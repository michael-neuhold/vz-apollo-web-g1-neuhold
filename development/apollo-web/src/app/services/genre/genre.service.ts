import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
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

  getAll() : Observable<Array<Genre>>  {
    return this.http.get<Genre>(`${environment.server}/genre`)
    .pipe(map(res => res), catchError(this.errorHandler));
  }
}

export class Genre {
  constructor(
    public id? : string,
    public name? : string
  ) {}
}
