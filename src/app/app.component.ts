import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import AOS from 'aos';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { HeaderComponent } from "./components/header/header.component";
import { MusicComponentComponent } from "./components/music-component/music-component.component";
import { CalendarComponentComponent } from "./components/calendar-component/calendar-component.component";
import { CounterComponentComponent } from "./components/counter-component/counter-component.component";
import { GaleryComponentComponent } from "./components/galery-component/galery-component.component";
import { FilterComponentComponent } from "./components/filter-component/filter-component.component";
import { ParentsComponentComponent } from "./components/parents-component/parents-component.component";
import { LocationComponentComponent } from "./components/location-component/location-component.component";
import { ItineraryComponentComponent } from "./components/itinerary-component/itinerary-component.component";
import { OutfitComponentComponent } from "./components/outfit-component/outfit-component.component";
import { GiftsComponentComponent } from "./components/gifts-component/gifts-component.component";
import { AsisComponentComponent } from "./components/asis-component/asis-component.component";

@Component({
  selector: 'app-root',
  imports: [ButtonModule, CommonModule, CarouselModule, HeaderComponent, MusicComponentComponent, CalendarComponentComponent, CounterComponentComponent, GaleryComponentComponent, FilterComponentComponent, ParentsComponentComponent, LocationComponentComponent, ItineraryComponentComponent, OutfitComponentComponent, GiftsComponentComponent, AsisComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'

})
export class AppComponent implements OnInit {

  ngAfterViewInit(): void {

    setTimeout(() => {
      AOS.refresh();
    }, 500);
  }

  constructor(private routes: Router,private el: ElementRef, private renderer: Renderer2){}

  ngOnInit(): void {
    AOS.init({
      once: false,
    });

    this.routes.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }
}
