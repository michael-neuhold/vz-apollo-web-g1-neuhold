import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, filter, map, tap } from 'rxjs/operators';
import { MovieSchedule, Schedule } from 'src/app/domains/schedule';
import { FilterAttributes } from 'src/app/overview/movie-overview-filter/movie-overview-filter.component';
import { environment } from 'src/environments/environment';
import { errorHandler } from '../handler/error';
import { successHandler } from '../handler/success';
import { SnackbarMessageService } from '../snackbar-message/snackbar-message.service';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private http: HttpClient, public datepipe: DatePipe, private snackbarMessage: SnackbarMessageService) { }

  getAll() : Observable<Schedule[]> {
    return this.http.get(`${environment.server}/schedule`)
    .pipe(catchError((err => errorHandler(err, "schedules", this.snackbarMessage))));
  }

  getCurrent() : Observable<MovieSchedule[]>  {
    return this.http.get(`${environment.server}/schedule/current`)
    .pipe(catchError((err => errorHandler(err, "current schedules", this.snackbarMessage))));
  }

  getFiltered(filter: FilterAttributes) : Observable<Array<MovieSchedule>> {
    return this.http.get(`${environment.server}/schedule/filtered`+
      `?movie=${filter.movieTitle ? filter.movieTitle : '' }`+
      `&startDate=${filter.startDate ? this.datepipe.transform(filter.startDate, "MM/dd/yyyy") :  this.datepipe.transform(Date.now(), "MM/dd/yyyy")}`+
      `&endDate=${filter.endDate ? this.datepipe.transform(filter.endDate, "MM/dd/yyyy") : this.datepipe.transform(this.getWeekEndDate(), "MM/dd/yyyy")}`+
      `&cinemaHall=${filter.cinemaHall ? filter.cinemaHall : ''}`)
      .pipe(catchError((err => errorHandler(err, "filtered schedules", this.snackbarMessage))));
  }

  create(schedule: Schedule) : Observable<any> {
    return this.http.post<any>(`${environment.server}/schedule`, schedule)
    .pipe(
      tap(() => successHandler("schedule created", this.snackbarMessage)),
      catchError((err => errorHandler(err, "schedule", this.snackbarMessage))
    ));
  }

  update(schedule: Schedule) : Observable<any> {
    console.log('in service:', schedule);
    return this.http.put<any>(`${environment.server}/schedule`, schedule)
    .pipe(
      tap(() => successHandler("schedule updated", this.snackbarMessage)),
      catchError((err => errorHandler(err, "schedule", this.snackbarMessage))
    ));
  }

  getWeekEndDate() : any {
    var d = new Date();
    return d.setDate(d.getDate()+5);
  }

}








