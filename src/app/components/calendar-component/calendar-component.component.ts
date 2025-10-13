import { CommonModule } from '@angular/common';
import {Component } from '@angular/core';
import { GoogleCalendarService } from '../../services/google-calendar.service';

@Component({
  selector: 'calendar-component',
  imports: [CommonModule],
  templateUrl: './calendar-component.component.html',
  styleUrl: './calendar-component.component.scss',
})
export class CalendarComponentComponent {


  constructor( private googleCalendarService:GoogleCalendarService){
    this.days = Array.from({ length: 31 }, (_, i) => i + 1);
    this.generateDecemberCalendar();
  }

  days: (number | string)[] = [];
  weekdays: string[] = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];
  date = "2025-12-27T13:00:00";

  generateDecemberCalendar(): void {

  const daysInMonth = 31;
  const startDay = 0;
  const emptyDays: (string | number)[] = Array.from({ length: startDay }, () => '');
  const monthDays: (string | number)[] = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  this.days = emptyDays.concat(monthDays);

  }

    abrirGoogleCalendar(){
    this.googleCalendarService.abrirGoogleCalendar(
      this.date,
      {
        titulo: "Boda de Lissette y Carlos",
        frase: "Hoy comienza nuestra eternidad, de la mano, con amor y sin final.",
        ubicacion: "Texcalyacac, Edo.Méx",
        evento: "Boda",
        duracionHoras: 4
      }
    )
  }

 }
