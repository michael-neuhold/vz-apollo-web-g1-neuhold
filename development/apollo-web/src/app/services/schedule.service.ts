import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, filter, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private http: HttpClient) { }

  private errorHandler(error: Error | any): Observable<any> {
    console.log(error);
    return of(null);
  }

  getCurrent() : Observable<Array<MovieSchedule>>  {
    return this.http.get(`${environment.server}/schedule/current`)
    .pipe(map(res => res), catchError(this.errorHandler));
  }

  getFiltered() : Observable<Array<MovieSchedule>> {
    return this.http.get(`${environment.server}/schedule/filtered`)
    .pipe(map(res => res), catchError(this.errorHandler));
  }

}

export class MovieSchedule{
  constructor(
    public id? : string,
    public title? : string,
    public originalTitle? : string,
    public description? : string,
    public genre? : string,
    public length? : number,
    public coverImageLink? : string,
    public coverImage? : string,
    public schedule? : null
  ) {}
}

export class ScheduleFilter {
  constructor(
    public id?: number,
    public movieId?: number,
    public movieTitle?: string,
    public startTime?: Date,
    public endTime?: Date,
    public genreId?: number,
    public genre?: string,
    public cinemaHallId?: string
  ) {
    startTime = new Date("2020-10-01");
    endTime = new Date("2021-10-01");
  }
}




