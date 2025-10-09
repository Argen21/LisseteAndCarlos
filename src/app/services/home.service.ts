import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HomeService {
    getProductsData() {
        return [
            {
                image: 'main_one.jpg',
            },
            {
                image: 'main_three.jpg',
            },
            {
                image: 'main_two.jpg',
            }
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
