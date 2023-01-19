import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdinr'
})
export class UsdinrPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    const [x]=args
    return value*x;
  }

}
