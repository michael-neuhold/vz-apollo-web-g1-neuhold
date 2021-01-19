import { Observable } from "rxjs";

export interface BasisService {
  getById_(categoryId: any): Observable<any>;
}
