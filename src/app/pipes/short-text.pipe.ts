import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortText',
  standalone: true
})
export class ShortTextPipe implements PipeTransform {

  transform(value: string, start: number, end:number): unknown {
    return value.slice(start, end)
  }

}
