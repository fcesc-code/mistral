import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'markdownBold',
  standalone: true,
})
export class MarkdownBoldPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string): SafeHtml {
    if (!value) return value;
    const boldTextRegex = /\*\*(.*?)\*\*/g;
    const replacedValue = value.replace(boldTextRegex, '<strong>$1</strong>');
    return this.sanitizer.bypassSecurityTrustHtml(replacedValue);
  }
}
