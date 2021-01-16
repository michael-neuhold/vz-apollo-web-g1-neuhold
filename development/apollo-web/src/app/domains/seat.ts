export class Seat {
  constructor(
    public id?: number,
    public label?: SeatLabel,
    public price?: number,
    public categoryId?: string,
    public categoryIconName?: string,
    public seatInformationId?: number,
    public coordinate?: Coordinate
  ) {}
}

export class SeatLabel {
  constructor(
    public row?: string,
    public number?: string,
  ) {}
}


export class Coordinate {
  constructor(
    public x?: number,
    public y?: number,
  ) {}
}
