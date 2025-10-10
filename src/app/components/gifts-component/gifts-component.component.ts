import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'gifts-component',
  imports: [CommonModule],
  templateUrl: './gifts-component.component.html',
  styleUrl: './gifts-component.component.scss',
})
export class GiftsComponentComponent {

  tooltips: { [key: string]: boolean } = {
    hashtag: false,
    nameTxt: false,
    nameCuenta: false,
    nameTarjeta: false,
    nameClabe: false
  };

  copiarAlPortapapeles(texto: string, key: string) {
    navigator.clipboard.writeText(texto).then(() => {
      this.tooltips[key] = true;

      setTimeout(() => {
        this.tooltips[key] = false;
      }, 3000);
    }).catch(err => console.error('Error al copiar:', err));
  }
}
