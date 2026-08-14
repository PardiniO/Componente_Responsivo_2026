import { Component } from '@angular/core';

@Component({
  selector: 'app-encabezado2',
  templateUrl: './encabezado2.component.html',
  styleUrl: './encabezado2.component.scss'
})
export class Encabezado2Component {
  recibirMsjDesdeElHijo(mensaje: string){
    console.log(mensaje);
  }
}
