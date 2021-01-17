import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { CinemaHall, CinemaHallDetailed } from 'src/app/domains/cinemahall';
import { Seat } from 'src/app/domains/seat';
import { environment } from 'src/environments/environment';
import { errorHandler } from '../handler/error';
import { successHandler } from '../handler/success';
import { SnackbarMessageService } from '../snackbar-message/snackbar-message.service';

@Injectable({
  providedIn: 'root'
})
export class CinemahallService {

  constructor(private http: HttpClient, private snackbarMessage: SnackbarMessageService) { }

  getAll() : Observable<Array<CinemaHall>>  {
    return this.http.get<CinemaHall>(`${environment.server}/cinemahall`)
    .pipe(catchError((err => errorHandler(err, "cinemahalls", this.snackbarMessage))));
  }

  getById(id: string) : Observable<CinemaHallDetailed> {
    return this.http.get<CinemaHallDetailed>(`${environment.server}/cinemahall/${id}`)
    .pipe(catchError((err => errorHandler(err, "cinemahall", this.snackbarMessage))));
  }

  getSeats(versionId: number) : Observable<Seat[]> {
    return this.http.get<CinemaHallDetailed>(`${environment.server}/cinemahall/version/${versionId}/seats`)
    .pipe(catchError((err => errorHandler(err, "cinemahall", this.snackbarMessage))));
  }

  update(cinemaHall: CinemaHallDetailed) : Observable<any> {
    return this.http.put<any>(`${environment.server}/cinemahall`, cinemaHall)
    .pipe(
      tap(() => successHandler("cinemahall updated", this.snackbarMessage)),
      catchError((err => errorHandler(err, "cinemahall", this.snackbarMessage))
    ));
  }

  create(cinemaHall: CinemaHall) : Observable<any> {
    return this.http.post<any>(`${environment.server}/cinemahall`, cinemaHall)
    .pipe(
      tap(() => successHandler("cinemahall created", this.snackbarMessage)),
      catchError((err => errorHandler(err, "cinemahall", this.snackbarMessage))
    ));
  }

}

