import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    getProductsData() {
        return [
          { image: 'v1759950688/carrusel-1_vzkvjy.webp' },
          { image: 'v1759969327/carrusel-2_oswtjk.webp' },
          { image: 'v1759950688/carrusel-3_ht1f8i.webp' },
          { image: 'v1759950699/carrusel-4_bw02x2.webp' },
          { image: 'v1759950699/carrusel-5_nfrqky.webp' },
          { image: 'v1759950700/carrusel-6_tlhrdx.webp' },
          { image: 'v1759969329/carrusel-7_omg8rh.webp' },
          { image: 'v1759954798/carrusel-8_ekucle.webp' },
        ];
    }

    getProductsMini() {
        return Promise.resolve(this.getProductsData().slice(0, 5));
    }

    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    }

    getProducts() {
        return Promise.resolve(this.getProductsData());
    }
};
