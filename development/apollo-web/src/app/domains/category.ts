import { DecimalPipe } from "@angular/common";

export class Category {
  constructor (
    public id?: string,
    public description?: string,
    public price?: string,
    public iconName?: string,
  ) {}
}
