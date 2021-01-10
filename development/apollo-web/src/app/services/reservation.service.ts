import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
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
    .pipe(map(res => res), catchError(this.errorHandler));
  }

  getById(id) : Observable<Reservation>  {
    return this.http.get<Reservation>(`${environment.server}/reservation/${id}`)
    .pipe(map(res => res), catchError(this.errorHandler));
  }

}


export class Reservation {
  constructor(
    public id?: number,
    public reservationDate?: Date,
    public scheduleId?: number,
    public movieId?: number,
    public movieTitle?: Date,
    public seats?: Seat[]
  ) {}
}


export class Seat {
  constructor(
    public id?: number,
    public label?: SeatLabel,
    public price?: number,
    public categoryIconName?: string,
    public seatInformationId?: number
  ) {}
}

export class SeatLabel {
  constructor(
    public row?: string,
    public number?: string,
  ) {}
}
