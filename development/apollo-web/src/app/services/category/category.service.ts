import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Category } from 'src/app/domains/category';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  private errorHandler(error: Error | any): Observable<any> {
    console.log(error);
    return of(null);
  }

  getAll() : Observable<Array<Category>> {
    return this.http.get<Category[]>(`${environment.server}/category`)
    .pipe(
      catchError((err => this.errorHandler(err)))
    );
  }

  create(category: Category) : Observable<any> {
    console.log("before create -> ", category);
    return this.http.post<any>(`${environment.server}/category`, category, { })
    .pipe (
      catchError((err) => this.errorHandler(err))
    );
  }

  update(category: Category) {
    return this.http.put<Category>(`${environment.server}/category`, category)
    .pipe (
      catchError((err) => this.errorHandler(err))
    )
  }

}

