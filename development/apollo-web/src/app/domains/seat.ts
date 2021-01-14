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
