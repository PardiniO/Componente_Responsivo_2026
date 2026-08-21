import { Component } from '@angular/core';

type Ejercicio = 1 | 2 | 3 | 4;
type EjercicioSeleccionado = Ejercicio | null;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'Trabajo Práctico';
  ejercicioActivo: EjercicioSeleccionado = null;

  seleccionarEjercicio(ejercicio: Ejercicio): void {
    this.ejercicioActivo = ejercicio;
  }
}
