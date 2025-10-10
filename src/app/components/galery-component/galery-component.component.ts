import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'galery-component',
  imports: [CommonModule, CarouselModule],
  templateUrl: './galery-component.component.html',
  styleUrl: './galery-component.component.scss',
})
export class GaleryComponentComponent  implements OnInit {

  products: Product[] | any;
  responsiveOptions: any[] | undefined;

  constructor(private productService: ProductService){}

  ngOnInit(): void {
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
  }


}
