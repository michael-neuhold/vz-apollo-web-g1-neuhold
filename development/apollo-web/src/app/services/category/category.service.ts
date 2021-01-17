import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Category } from 'src/app/domains/category';
import { environment } from 'src/environments/environment';
import { SnackbarMessageService } from '../snackbar-message/snackbar-message.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient, private snackbarMessage: SnackbarMessageService) { }

  private errorHandler(error: Error | any): Observable<any> {
    if (error.status == 409)
      this.snackbarMessage.openSnackBar("conflict", "snackbar-message-error");
    else if (error.status == 404)
      this.snackbarMessage.openSnackBar("not found", "snackbar-message-error");
    console.log(error);
    return of(null);
  }

  private successHandler(message: string) {
    this.snackbarMessage.openSnackBar(message, "snackbar-message-success");
  }

  getAll() : Observable<Array<Category>> {
    return this.http.get<Category[]>(`${environment.server}/category`)
    .pipe(
      catchError((err => this.errorHandler(err)))
    );
  }

  create(category: Category) : Observable<any> {
    console.log("before create -> ", category);
    return this.http.post<any>(`${environment.server}/category`, category)
    .pipe(
      tap(() => this.successHandler("created")),
      catchError((err => this.errorHandler(err))
    ));
  }

  update(category: Category) {
    return this.http.put<Category>(`${environment.server}/category`, category)
    .pipe(
      tap(() => this.successHandler("updated")),
      catchError((err => this.errorHandler(err)))
    );
  }

}

