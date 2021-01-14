import { Directive } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[noSpaceValidation]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: NoSpaceValidation,
    multi: true
  }]
})
export class NoSpaceValidation implements Validator {
  validate(control: AbstractControl) : {[key: string]: any} | null {
    if (control.value && control.value.includes(' ')) {
      return { 'noSpaceValidation': true }; // return object if the validation is not passed.
    }
    return null; // return null if validation is passed.
  }
}
