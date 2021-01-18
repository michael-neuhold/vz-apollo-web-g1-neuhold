import { Observable } from "rxjs";

export interface BasisService {
  getById(categoryId: any): Observable<any>;
}
