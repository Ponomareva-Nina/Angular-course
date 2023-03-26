import { Pipe, PipeTransform } from '@angular/core';
import { THOUSAND, THOUSAND_DIGITS_NUM } from '../constants/constants';

@Pipe({
  name: 'socialsCount',
})
export class SocialsCountPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  public transform(value: string): string {
    if (value.length > THOUSAND_DIGITS_NUM) {
      const briefNum = (Number(value) / THOUSAND).toFixed(0);
      return `${briefNum}k`;
    }
    return value;
  }
}
