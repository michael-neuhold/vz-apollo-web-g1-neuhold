import { Seat } from "./seat";

export class CinemaHall {
  constructor(
    public id? : string,
    public size? : Size,
    public userId: number = 41
  ) {}
}

export class Size {
  constructor(
    public x?: number,
    public y?: number
  ) {}
}

export class CinemaHallDetailed {
  constructor(
    public id? : string,
    public size? : Size,
    public seats? : Seat[],
    public versionId? : number
  ){}
}
