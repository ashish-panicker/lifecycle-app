import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortText',
  standalone: true
})
export class ShortTextPipe implements PipeTransform {
  /**
   * <a href='https://angular.io/guide/pipes-overview'>Pipes<a/>
   * 
   * @param value value to be transformed
   * @param start starting index
   * @param end ending index
   * @returns a slice of the string from starting index to ending index
   */

  transform(value: string, start: number, end:number): unknown {
    return value.slice(start, end)
  }

}
