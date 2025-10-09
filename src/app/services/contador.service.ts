import { Injectable } from '@angular/core';
import { HoraCorregidaPipe } from '../pipes/horas-corregidas.pipe';
import { MesAbrebiadoPipe } from '../pipes/mes.abreviado.pipe';
import { InvitacionesInterfaz } from '../interfaces/Invitacionesinfo';

@Injectable({providedIn: 'root'})
export class ContadorService {

  dias: number = 0;
  horas: number = 0;
  minutos: number = 0;
  segundos: number = 0;
  eventoFinalizado: boolean = false;
  private intervalId: any;

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  iniciarContador(data: InvitacionesInterfaz | string | Date) {
    let fechaEvento: number;

    if (typeof data === 'string' || data instanceof Date) {
      fechaEvento = new Date(data).getTime();
    } else {
      const horaCorrecta = new HoraCorregidaPipe().transform(data.fecha!.hora);
      const mesAbreviado = new MesAbrebiadoPipe().transform(data.fecha!.mes);
      fechaEvento = new Date(
        `${mesAbreviado} ${data.fecha!.numero}, ${data.fecha!.year}, ${horaCorrecta || '00:00:00'}`
      ).getTime();
    }

    this.intervalId = setInterval(() => {
      const ahora = Date.now();
      const distancia = fechaEvento - ahora;

      if (distancia < 0) {
        clearInterval(this.intervalId);
        this.eventoFinalizado = true;
        return;
      }

      this.dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
      this.horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
      this.segundos = Math.floor((distancia % (1000 * 60)) / 1000);
    }, 1000);
  }





}
