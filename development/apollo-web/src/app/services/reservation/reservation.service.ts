import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Reservation } from 'src/app/domains/reservation';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }

  private errorHandler(error: Error | any): Observable<any> {
    console.log(error);
    return of(null);
  }

  getAll() : Observable<Array<Reservation>>  {
    return this.http.get<Reservation>(`${environment.server}/reservation`)
    .pipe(catchError(this.errorHandler));
  }

  getById(id: number) : Observable<Reservation>  {
    return this.http.get<Reservation>(`${environment.server}/reservation/${id}`)
    .pipe(catchError(this.errorHandler));
  }

  isPaid(id: number) : Observable<boolean> {
    return this.http.get<boolean>(`${environment.server}/reservation/paid/${id}`)
    .pipe(catchError(this.errorHandler));
  }

}
