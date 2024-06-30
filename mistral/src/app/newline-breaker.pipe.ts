import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newlineBreaker',
  standalone: true,
})
export class NewlineBreaker implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    return value.replace(/\n/g, '<br>');
  }
}
