import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'Trabajo Práctico';
  ejercicioActivo: Ejercicio = 1;

  seleccionarEjercicio(ejercicio: Ejercicio): void {
    this.ejercicioActivo = ejercicio;
}
