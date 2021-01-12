import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageEndpoint'
})
export class ImageEndpointPipe implements PipeTransform {

  transform(endpoint: string): string {
    return `http://localhost:5000/${endpoint}`;
  }

}
