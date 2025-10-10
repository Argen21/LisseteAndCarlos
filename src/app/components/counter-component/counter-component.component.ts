import {Component, OnInit } from '@angular/core';
import { ContadorService } from '../../services/contador.service';
import { CommonModule } from '@angular/common';
import { GoogleCalendarService } from '../../services/google-calendar.service';

@Component({
  selector: 'counter-component',
  imports: [CommonModule],
  templateUrl: './counter-component.component.html',
  styleUrl: './counter-component.component.scss',
})
export class CounterComponentComponent implements OnInit {

  date = "2025-12-24T13:00:00";

  constructor(
    public contadorService: ContadorService,
    private googleCalendarService:GoogleCalendarService
  ){}

  ngOnInit(): void {
    this.contadorService.iniciarContador(this.date);
  }

  abrirGoogleCalendar(){
    this.googleCalendarService.abrirGoogleCalendar(
      this.date,
      {
        titulo: "Boda de Calor Eduardo y Lissette",
        frase: "Hoy comienza nuestra eternidad, de la mano, con amor y sin final.",
        ubicacion: "Texcalyacac, Edo.Méx",
        evento: "Boda",
        duracionHoras: 4
      }
    )
  }

}
