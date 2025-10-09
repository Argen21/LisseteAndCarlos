import { Injectable } from '@angular/core';
import AOS from 'aos';

@Injectable({
  providedIn: 'root',
})
export class AnimationService {
  private desktopBreakpoint = 768; // Ancho mínimo para considerar escritorio

  constructor() {}

  // Inicializa AOS
  initAOS(): void {
    AOS.init({
      once: false, // No limitar la animación a una sola vez
      duration: 600, // Duración por defecto de las animaciones
      easing: 'ease-in-out', // Opción para un suavizado en las animaciones
    });
  }

  // Calcula el retraso según el índice y el tipo de pantalla
  getAnimationDelay(index: number): number {
    const isDesktop = window.innerWidth >= this.desktopBreakpoint;
    return isDesktop ? index * 100 : 0; // Solo aplica el retraso en escritorio
  }

  // Refresca AOS después de cambios dinámicos
  refreshAOS(): void {
    AOS.refresh();
  }
}
