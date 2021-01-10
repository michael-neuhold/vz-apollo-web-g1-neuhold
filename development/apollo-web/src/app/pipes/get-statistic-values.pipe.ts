import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getStatisticValues'
})
export class GetStatisticValuesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
