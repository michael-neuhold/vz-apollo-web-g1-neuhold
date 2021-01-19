import { Observable } from "rxjs";

export interface BasisService {
  getById_(id: any): Observable<any>;
}
