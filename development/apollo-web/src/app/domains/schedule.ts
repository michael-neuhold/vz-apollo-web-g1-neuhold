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

export class MovieSchedule{
  constructor(
    public id? : string,
    public title? : string,
    public originalTitle? : string,
    public description? : string,
    public genre? : string,
    public length? : number,
    public coverImageLink? : string,
    public coverImage? : string,
    public schedule? : null,
    public availabilityPercentage? :  number
  ) {}
}

export class ScheduleFilter {
  constructor(
    public id?: number,
    public movieId?: number,
    public movieTitle?: string,
    public startTime?: Date,
    public endTime?: Date,
    public genreId?: number,
    public genre?: string,
    public cinemaHallId?: string
  ) {
    startTime = new Date("2020-10-01");
    endTime = new Date("2021-10-01");
  }
}
