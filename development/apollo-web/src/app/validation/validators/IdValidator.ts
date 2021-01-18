import { Injectable } from '@angular/core';
import {AbstractControl, AsyncValidator, AsyncValidatorFn, FormControl, ValidationErrors} from '@angular/forms';
import { timer } from 'rxjs';
import {Observable, of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import { Category } from 'src/app/domains/category';
import { BasisService } from 'src/app/services/basis/basis-service';
import { CategoryService } from 'src/app/services/category/category.service';
import { GenreService } from 'src/app/services/genre/genre.service';

/*
export const IdValidator =
  (categoryService: CategoryService, time: number = 200) => {
    console.log("call");
    return (input: FormControl) => {
        return zipcodeService.fakeHttp(control.value).pipe(
          map((result: boolean) => result ? null : {invalidAsync: true})
        );
      );
    };
  };
*/
  export class IdValidator {
    static createValidator(service: CategoryService): AsyncValidatorFn {
      return (control: AbstractControl): Observable<ValidationErrors> => {
        return service.getById(control.value).pipe(
          map(isTaken => (isTaken ? { idExists: true } : null)),
          catchError(() => of(null))
        );
      };
    }
  }
