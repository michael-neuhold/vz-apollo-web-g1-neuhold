import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentstatisticService {

  constructor(private http: HttpClient) { }

  private errorHandler(error: Error | any): Observable<any> {
    console.log(error);
    return of(null);
  }

  getGenreStatistic() : Observable<Array<Statistic>>  {
    return this.http.get<Statistic>(`${environment.server}/paymentstatistic/genre`)
    .pipe(map(res => res), catchError(this.errorHandler));
  }

  getMonthStatistic() : Observable<Array<Statistic>>  {
    return this.http.get<Statistic>(`${environment.server}/paymentstatistic/month/2020`)
    .pipe(map(res => res), catchError(this.errorHandler));
  }

  getYearStatistic() : Observable<Array<Statistic>>  {
    return this.http.get<Statistic>(`${environment.server}/paymentstatistic/year`)
    .pipe(map(res => res), catchError(this.errorHandler));
  }

  getWeekdayStatistic() : Observable<Array<Statistic>>  {
    return this.http.get<Statistic>(`${environment.server}/paymentstatistic/weekday`)
    .pipe(map(res => res), catchError(this.errorHandler));
  }

}

export class Statistic{
  constructor(
    public name? : string,
    public value? : string,
  ) {}
}
