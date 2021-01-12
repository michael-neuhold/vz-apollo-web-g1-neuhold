import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CinemahallService {

  constructor(private http: HttpClient) { }

  private errorHandler(error: Error | any): Observable<any> {
    console.log(error);
    return of(null);
  }

  getAll() : Observable<Array<CinemaHall>>  {
    return this.http.get<CinemaHall>(`${environment.server}/cinemahall`)
    .pipe(map(res => res), catchError(this.errorHandler));
  }
}

export class CinemaHall {
  constructor(
    public id? : string,
    public size? : Size,
  ) {}
}

export class Size {
  constructor(
    public x?: number,
    public y?: number
  ) {}
}
