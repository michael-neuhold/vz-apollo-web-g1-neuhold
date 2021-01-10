import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getStatisticNames'
})
export class GetStatisticNamesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
