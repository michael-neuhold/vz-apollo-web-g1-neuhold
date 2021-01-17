import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Reservation } from 'src/app/domains/reservation';
import { environment } from 'src/environments/environment';
import { errorHandler } from '../handler/error';
import { SnackbarMessageService } from '../snackbar-message/snackbar-message.service';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient, private snackbarMessage: SnackbarMessageService) { }

  getAll() : Observable<Array<Reservation>>  {
    return this.http.get<Reservation>(`${environment.server}/reservation`)
    .pipe(catchError((err => errorHandler(err, "reservations", this.snackbarMessage))));
  }

  getById(id: number) : Observable<Reservation>  {
    return this.http.get<Reservation>(`${environment.server}/reservation/${id}`)
    .pipe(catchError((err => errorHandler(err, "reservation", this.snackbarMessage))));
  }

  isPaid(id: number) : Observable<boolean> {
    return this.http.get<boolean>(`${environment.server}/reservation/paid/${id}`)
    .pipe(catchError((err => errorHandler(err, "payment info", this.snackbarMessage))));
  }

}
