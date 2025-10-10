import { CommonModule } from '@angular/common';
import {Component } from '@angular/core';

@Component({
  selector: 'calendar-component',
  imports: [CommonModule],
  templateUrl: './calendar-component.component.html',
  styleUrl: './calendar-component.component.scss',
})
export class CalendarComponentComponent {


  constructor(){
    this.days = Array.from({ length: 31 }, (_, i) => i + 1);
    this.generateDecemberCalendar();
  }

  days: (number | string)[] = [];
  weekdays: string[] = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];
  date = "2025-12-24T13:00:00";

  generateDecemberCalendar(): void {

  const daysInMonth = 31;
  const startDay = 4;
  const emptyDays: (string | number)[] = Array.from({ length: startDay }, () => '');
  const monthDays: (string | number)[] = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  this.days = emptyDays.concat(monthDays);

  }

 }
