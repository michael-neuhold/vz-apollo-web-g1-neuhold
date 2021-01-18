import { Observable } from "rxjs";

export interface BasisService<T> {
  getById(categoryId: string): Observable<T>;
}
