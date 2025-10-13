import { Injectable } from '@angular/core';

interface OpcionesEvento {
  titulo?: string;
  frase?: string;
  ubicacion?: string;
  evento?: string;
  duracionHoras?: number;
}

@Injectable({
  providedIn: 'root'
})
export class GoogleCalendarService {

  constructor() {}

  abrirCalendario(input: string | any, opciones?: OpcionesEvento) {
    let fechaISO: string;
    let titulo: string;
    let frase: string;
    let ubicacion: string;
    let evento: string;
    let duracionHoras: number;

    if (typeof input === 'string') {
      fechaISO = input;
      titulo = opciones?.titulo || 'Evento Especial';
      frase = opciones?.frase || 'No te lo pierdas.';
      ubicacion = opciones?.ubicacion || 'Ubicación pendiente';
      evento = opciones?.evento || '.';
      duracionHoras = opciones?.duracionHoras ?? 2;
    } else {
      const { year, mes, numero, hora } = input.fecha || {};
      fechaISO = `${year}-${mes?.padStart(2, '0')}-${numero?.padStart(2, '0')}T${hora || '00:00'}:00`;

      titulo = input.titulo || 'Evento Especial';
      frase = input.frase || 'No te lo pierdas.';
      ubicacion = input.hubicaciones?.[0]?.direccion || 'Ubicación pendiente';
      evento = input.evento || '.';
      duracionHoras = input.duracionHoras ?? 2;
    }

    const fechaInicio = new Date(fechaISO);
    if (isNaN(fechaInicio.getTime())) {
      console.error("Fecha inválida", fechaISO);
      return;
    }

    const fechaFin = new Date(fechaInicio.getTime() + duracionHoras * 60 * 60 * 1000);

    const inicioStr = fechaInicio.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    const finStr = fechaFin.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

    // Contenido del archivo ICS
    const icsContent = `
BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${titulo} nuestra ${evento}
DESCRIPTION:${frase}
LOCATION:${ubicacion}
DTSTART:${inicioStr}
DTEND:${finStr}
END:VEVENT
END:VCALENDAR`.trim();

    // Crear archivo descargable
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `${titulo.replace(/\s+/g, '_')}.ics`;
    a.click();

    URL.revokeObjectURL(url);
  }
}
