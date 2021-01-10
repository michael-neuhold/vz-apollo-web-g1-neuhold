import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { catchError } from 'rxjs/operators';
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

  getById(id) : Observable<MovieDetail>  {
    return this.http.get<MovieDetail>(`${environment.server}/movie/${id}`)
    .pipe(map(res => res), catchError(this.errorHandler));
  }
}

export class MovieDetail{
  constructor(
    public id? : string,
    public title? : string,
    public originalTitle? : string,
    public description? : string,
    public genre? : string,
    public length? : number,
    public coverImageLink? : string,
    public coverImage? : string,
    public trailerUrl? : string
  ) {}
}
