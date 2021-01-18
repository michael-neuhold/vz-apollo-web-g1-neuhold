import { Injectable } from '@angular/core';
import {AbstractControl, AsyncValidator, AsyncValidatorFn, FormControl, ValidationErrors} from '@angular/forms';
import { timer } from 'rxjs';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import { BasisService } from 'src/app/services/basis/basis-service';

export class IdExistsValidator {
  static createValidator<T>(service: BasisService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors> => {
      return service.getById(control.value).pipe(
        map(isTaken => (isTaken ? { idExists: true } : null)),
        catchError(() => of(null))
      );
    };
  }
}
