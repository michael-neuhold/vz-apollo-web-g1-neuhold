import { Seat } from "./seat";

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
