import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CinemaHall, CinemaHallDetailed } from 'src/app/domains/cinemahall';
import { Seat } from 'src/app/domains/seat';
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
    .pipe(catchError(this.errorHandler));
  }

  getById(id: string) : Observable<CinemaHallDetailed> {
    return this.http.get<CinemaHallDetailed>(`${environment.server}/cinemahall/${id}`)
    .pipe(catchError(this.errorHandler));
  }

  getSeats(versionId: number) : Observable<Seat[]> {
    return this.http.get<CinemaHallDetailed>(`${environment.server}/cinemahall/version/${versionId}/seats`)
    .pipe(catchError(this.errorHandler));
  }

}

