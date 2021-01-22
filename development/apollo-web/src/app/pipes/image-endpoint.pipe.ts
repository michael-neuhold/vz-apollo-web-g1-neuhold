import { Pipe, PipeTransform } from '@angular/core';
import { BASE, PORT } from 'src/environments/environment';

@Pipe({
  name: 'imageEndpoint'
})
export class ImageEndpointPipe implements PipeTransform {

  transform(endpoint: string): string {
    return `${BASE}:${PORT}/${endpoint}`;
  }

}
