export class Schedule {
  constructor(
  public id?: number,
  public movieId?: number,
  public movieTitle?: string,
  public movieOriginalTitle?: string,
  public movieLength?: number,
  public cinemaHallVersionId?: number,
  public cinemaHallId?: string,
  public startTime?: Date
  ){}
}
