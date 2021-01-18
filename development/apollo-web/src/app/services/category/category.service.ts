import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Category } from 'src/app/domains/category';
import { environment } from 'src/environments/environment';
import { BasisService } from '../basis/basis-service';
import { errorHandler } from '../handler/error';
import { successHandler } from '../handler/success';
import { SnackbarMessageService } from '../snackbar-message/snackbar-message.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService implements BasisService {

  constructor(private http: HttpClient, private snackbarMessage: SnackbarMessageService) { }

  getById(categoryId: string): Observable<Category> {
    return this.http.get<Category>(`${environment.server}/category/${categoryId}`);
  }

  getAll() : Observable<Array<Category>> {
    return this.http.get<Category[]>(`${environment.server}/category`)
    .pipe(
      catchError((err => errorHandler(err, "category", this.snackbarMessage)))
    );
  }

  create(category: Category) : Observable<any> {
    return this.http.post<any>(`${environment.server}/category`, category)
    .pipe(
      tap(() => successHandler("category created", this.snackbarMessage)),
      catchError((err => errorHandler(err, "category", this.snackbarMessage))
    ));
  }

  update(category: Category) {
    return this.http.put<Category>(`${environment.server}/category`, category)
    .pipe(
      tap(() => successHandler("category updated", this.snackbarMessage)),
      catchError((err => errorHandler(err, "category", this.snackbarMessage)))
    );
  }

}

