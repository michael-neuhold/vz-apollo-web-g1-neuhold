export class MovieDetail{
  constructor(
    public id? : string,
    public title? : string,
    public originalTitle? : string,
    public description? : string,
    public genre? : string,
    public genreId? : number,
    public length? : number,
    public coverImageLink? : string,
    public coverImage? : string,
    public trailerUrl? : string,
    public actors?: string,
  ) {}
}
