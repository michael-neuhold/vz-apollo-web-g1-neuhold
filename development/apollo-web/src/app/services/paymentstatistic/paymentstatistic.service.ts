import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { errorHandler } from '../handler/error';
import { SnackbarMessageService } from '../snackbar-message/snackbar-message.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentstatisticService {

  constructor(private http: HttpClient, private snackbarMessage: SnackbarMessageService) { }

  getGenreStatistic() : Observable<Array<Statistic>>  {
    return this.http.get<Statistic>(`${environment.server}/paymentstatistic/genre`)
    .pipe(catchError((err => errorHandler(err, "genre statistic", this.snackbarMessage))));
  }

  getMonthStatistic() : Observable<Array<Statistic>>  {
    return this.http.get<Statistic>(`${environment.server}/paymentstatistic/month/2020`)
    .pipe(catchError((err => errorHandler(err, "month statistic", this.snackbarMessage))));
  }

  getYearStatistic() : Observable<Array<Statistic>>  {
    return this.http.get<Statistic>(`${environment.server}/paymentstatistic/year`)
    .pipe(catchError((err => errorHandler(err, "year statistic", this.snackbarMessage))));
  }

  getWeekdayStatistic() : Observable<Array<Statistic>>  {
    return this.http.get<Statistic>(`${environment.server}/paymentstatistic/weekday`)
    .pipe(catchError((err => errorHandler(err, "weekday statistic", this.snackbarMessage))));
  }

}

export class Statistic{
  constructor(
    public name? : string,
    public value? : string,
  ) {}
}
