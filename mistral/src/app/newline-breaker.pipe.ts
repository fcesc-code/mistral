import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'newlineBreaker',
  standalone: true,
})
export class NewlineBreaker implements PipeTransform {
  private sanitizer: DomSanitizer;
  transform(value: string, ...args: unknown[]): SafeHtml | undefined {
    if (value != undefined) {
      return this.sanitizer.bypassSecurityTrustHtml(
        value.replace(/\n/g, '<br>')
      );
    } else {
      return value;
    }
  }
}
