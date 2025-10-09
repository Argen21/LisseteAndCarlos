import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'hora-corregida',
    standalone: false
})

export class HoraCorregidaPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '00:00:00'; // Si no hay valor, devolvemos "00:00:00"

    // Eliminamos 'a.m.' o 'p.m.' y convertimos la hora a formato 24h
    const cleanedValue = value.toLowerCase().replace(/(a\.m\.|p\.m\.)/g, '').trim();

    // Separamos la hora y los minutos
    const [horas, minutos] = cleanedValue.split(':');

    // Si el valor de las horas es en formato 12h (con a.m. o p.m.), hacemos la conversión
    let horaConvertida = parseInt(horas);
    if (value.includes('p.m.') && horaConvertida < 12) {
      horaConvertida += 12; // Si es p.m. y menor a 12, sumamos 12 para pasar a formato 24h
    } else if (value.includes('a.m.') && horaConvertida === 12) {
      horaConvertida = 0; // Si es 12 a.m., lo convertimos a 00
    }

    const segundos = '00'; // Si no se proporcionan segundos, los agregamos como 00
    return `${horaConvertida.toString().padStart(2, '0')}:${minutos}:${segundos}`;
  }
}
