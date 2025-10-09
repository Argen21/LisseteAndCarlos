import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import AOS from 'aos';
import { Product } from './interfaces/product';
import { MusicService } from './services/music.service';
import { ContadorService } from './services/contador.service';
import { GoogleCalendarService } from './services/google-calendar.service';
import { ProductService } from './services/product.service';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-root',
  imports: [ ButtonModule, CommonModule, CarouselModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'

})
export class AppComponent {

  ngAfterViewInit(): void {
    setTimeout(() => {
      AOS.refresh();
    }, 500);
  }

    days: (number | string)[] = [];
      weekdays: string[] = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];
      date = "2025-12-24T13:00:00";
      products: Product[] | any;
      responsiveOptions: any[] | undefined;
      hashtag = '#BodaCarlotaYLissette';
      tooltips: { [key: string]: boolean } = {
        hashtag: false,
        nameTxt: false,
        nameCuenta: false,
        nameTarjeta: false,
        nameClabe: false
      };


      constructor(
        public musicService: MusicService,
        public contadorService: ContadorService,
        private googleCalendarService:GoogleCalendarService,
        private productService: ProductService,
        private routes: Router
      ) {
         this.days = Array.from({ length: 31 }, (_, i) => i + 1);
         this.generateDecemberCalendar();
      }

          ngOnInit(): void {


        this.musicService.init("https://res.cloudinary.com/dxxf2jyg8/video/upload/v1759969639/music-lis_yn6pdq.mp3");
        this.contadorService.iniciarContador(this.date);

        this.productService.getProductsSmall().then((products) => {
        this.products = products;
        });

        this.responsiveOptions = [
          {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 1
          },
          {
            breakpoint: '770px',
            numVisible: 2,
            numScroll: 1
          },
          {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
          }
        ]

    AOS.init({
      once: false,
    });

    this.routes.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

      generateDecemberCalendar(): void {
        const daysInMonth = 31;

        const startDay = 4;

        const emptyDays: (string | number)[] = Array.from({ length: startDay }, () => '');

        const monthDays: (string | number)[] = Array.from({ length: daysInMonth }, (_, i) => i + 1);

        this.days = emptyDays.concat(monthDays);
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

      shareOnFacebook() {
        const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&hashtag=${encodeURIComponent(this.hashtag)}`;
        window.open(url, '_blank');
      }



      copiarAlPortapapeles(texto: string, key: string) {
        navigator.clipboard.writeText(texto).then(() => {
          this.tooltips[key] = true;

          setTimeout(() => {
            this.tooltips[key] = false;
          }, 3000);
        }).catch(err => console.error('Error al copiar:', err));
      }

      shareOnInstagram() {
        window.open('https://www.instagram.com/explore/tags/BodaCarlotaYLissette/', '_blank');
      }

      formatTime(time: number | null): string {
        const safeTime = time ?? 0;
        const minutes = Math.floor(safeTime / 60);
        const seconds = Math.floor(safeTime % 60);
        return `${minutes.toString().padStart(2, '0')}:${seconds
          .toString()
          .padStart(2, '0')}`;
      }

}
