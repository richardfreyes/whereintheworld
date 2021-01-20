import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commaSeparator'
})
export class CommaSeparatorPipe implements PipeTransform {
  private decimalSeparator: string;
  private thousandsSeparator: string;

  constructor() {
    this.decimalSeparator = '.';
    this.thousandsSeparator = ',';
  }

  transform(value: string, fractionSize: number = 2): string {
    if (value === null || value === '') { return ''; }
    else if (value === '0') { return value; }
    value = Number(value).toFixed(2);
    let [integer, fraction = ''] = (value || '').toString().split('.');
    fraction = fractionSize > 0 ? this.decimalSeparator + (fraction) : '';
    integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
    if (fraction == '.00') fraction = '';
    return integer + fraction;
  }

}
