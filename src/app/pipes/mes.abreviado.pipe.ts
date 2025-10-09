import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mesAbreviado',
  standalone: true
})

export class MesAbrebiadoPipe implements PipeTransform {
  transform(value: string): string {
    const mesesAbreviados: { [key: string]: string } = {
      '01': 'Jan',
      '02': 'Feb',
      '03': 'Mar',
      '04': 'Apr',
      '05': 'May',
      '06': 'Jun',
      '07': 'Jul',
      '08': 'Aug',
      '09': 'Sep',
      '10': 'Oct',
      '11': 'Nov',
      '12': 'Dec'
    };
    return mesesAbreviados[value.toLowerCase()] || value; // Devuelve la abreviatura o el valor original si no lo encuentra
  }
}
