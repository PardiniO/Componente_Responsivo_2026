import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-usuario',
  templateUrl: './data-usuario.component.html',
  styleUrl: './data-usuario.component.scss'
})
export class DataUsuarioComponent {
  @Input() nombre_usuario = '';

  mostrar_nombre: boolean = false;

  mostrarNombre() {
    this.mostrar_nombre = !this.mostrar_nombre;
  }
}
