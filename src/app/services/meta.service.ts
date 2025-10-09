import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaService {

  constructor(private meta: Meta, private titleService: Title) {}

  updateMetaTags(title: string, description: string, imageUrl: string): void {
    // Actualizar el título
    this.titleService.setTitle(title);

    // Actualizar los meta tags
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:image', content: imageUrl });
    this.meta.updateTag({ property: 'og:title', content: title });
  }
}
