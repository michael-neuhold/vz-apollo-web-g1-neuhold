import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageBase64'
})
export class ImageBase64Pipe implements PipeTransform {

  transform(value: string): string {
    return 'data:image/jpeg;base64,' + value;
  }

}
