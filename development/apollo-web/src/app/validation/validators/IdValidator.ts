import { Injectable } from '@angular/core';
import {AbstractControl, AsyncValidator, AsyncValidatorFn, FormControl, ValidationErrors} from '@angular/forms';
import { timer } from 'rxjs/observable/timer';
import {Observable, of} from 'rxjs';
import {catchError, debounce, debounceTime, distinctUntilChanged, map, switchMap, tap} from 'rxjs/operators';
import { BasisService } from 'src/app/services/basis/basis-service';

export class IdExistsValidator {
  static createValidator(service: BasisService, time: number = 500): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors> => {
      return timer(time).pipe(
        switchMap(() => service.getById_(control.value)),
        map(isTaken => (isTaken ? { idExists: true } : null)),
        catchError(() => of(null))
      );
    };
  }
}
