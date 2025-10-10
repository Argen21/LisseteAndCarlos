import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'filter-component',
  imports: [CommonModule],
  templateUrl: './filter-component.component.html',
  styleUrl: './filter-component.component.scss',
})
export class FilterComponentComponent {

  hashtag = '#BodaCarlotaYLissette';
  tooltips: { [key: string]: boolean } = {
    hashtag: false,
    nameTxt: false,
    nameCuenta: false,
    nameTarjeta: false,
    nameClabe: false
  };

  shareOnFacebook() {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&hashtag=${encodeURIComponent(this.hashtag)}`;
    window.open(url, '_blank');
  }

  shareOnInstagram() {
    window.open('https://www.instagram.com/explore/tags/BodaCarlotaYLissette/', '_blank');
  }

  copiarAlPortapapeles(texto: string, key: string) {
      navigator.clipboard.writeText(texto).then(() => {
        this.tooltips[key] = true;

        setTimeout(() => {
          this.tooltips[key] = false;
        }, 3000);
      }).catch(err => console.error('Error al copiar:', err));
  }



}
