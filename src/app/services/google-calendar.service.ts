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

  abrirGoogleCalendar(input: string | any, opciones?: OpcionesEvento) {
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

    const fechaInicioStr = fechaInicio.toISOString().replace(/[-:.]/g, "").slice(0, 15) + "Z";
    const fechaFinStr = fechaFin.toISOString().replace(/[-:.]/g, "").slice(0, 15) + "Z";

    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(titulo)} nuestra ${encodeURIComponent(evento)}&dates=${fechaInicioStr}/${fechaFinStr}&details=${encodeURIComponent(frase)}&location=${encodeURIComponent(ubicacion)}&sf=true&output=xml`;

    window.open(url, '_blank');
  }
}
