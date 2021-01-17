import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, filter, map } from 'rxjs/operators';
import { MovieSchedule, Schedule } from 'src/app/domains/schedule';
import { FilterAttributes } from 'src/app/overview/movie-overview-filter/movie-overview-filter.component';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private http: HttpClient, public datepipe: DatePipe) { }

  private errorHandler(error: Error | any): Observable<any> {
    console.log(error);
    return of(null);
  }

  getAll() : Observable<Schedule[]> {
    return this.http.get(`${environment.server}/schedule`)
    .pipe(catchError(this.errorHandler));
  }

  getCurrent() : Observable<Array<MovieSchedule>>  {
    return this.http.get(`${environment.server}/schedule/current`)
    .pipe(catchError(this.errorHandler));
  }

  getFiltered(filter: FilterAttributes) : Observable<Array<MovieSchedule>> {
    return this.http.get(`${environment.server}/schedule/filtered`+
      `?movie=${filter.movieTitle ? filter.movieTitle : '' }`+
      `&startDate=${filter.startDate ? this.datepipe.transform(filter.startDate, "yyyy/MM/dd") : '1/13/2021'}`+
      `&endDate=${filter.endDate ? this.datepipe.transform(filter.endDate, "yyyy/MM/dd") : '1/20/2021'}`+
      `&cinemaHall=${filter.cinemaHall ? filter.cinemaHall : ''}`)
    .pipe(catchError(this.errorHandler));
  }

  create(schedule: Schedule) : Observable<any> {
    console.log('send --> ', schedule);
    return this.http.post<any>(`${environment.server}/schedule`, schedule)
    .pipe(catchError(this.errorHandler));
  }

}








