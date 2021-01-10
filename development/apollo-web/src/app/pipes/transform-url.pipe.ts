import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'transformUrl'
})
export class TransformUrlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }
  transform(url): unknown {
    let url_new = url.replace("/watch?v=", "/embed/");
    return this.sanitizer.bypassSecurityTrustResourceUrl(url_new);
  }

}
