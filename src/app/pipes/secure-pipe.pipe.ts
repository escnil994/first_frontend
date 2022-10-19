import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';


@Pipe({
  name: 'securePipe'
})
export class SecurePipePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {

  }

  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }


}
