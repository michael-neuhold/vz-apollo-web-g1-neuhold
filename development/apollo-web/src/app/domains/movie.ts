export class MovieDetail{
  constructor(
    public id? : number,
    public title? : string,
    public originalTitle? : string,
    public description? : string,
    public genre? : string,
    public genreId? : number,
    public length? : number,
    public coverImageLink? : string,
    public coverImage? : string,
    public coverImageHd? : string,
    public trailerUrl? : string,
    public actors?: string,
  ) {}
}
