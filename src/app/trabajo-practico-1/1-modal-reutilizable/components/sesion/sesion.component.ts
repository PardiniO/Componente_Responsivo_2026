import { Component, ViewChild } from '@angular/core';
import { AccionModal } from "../modal-component/modal-component.component";

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.scss']
})
export class SesionComponent {
  mostrar_modal: boolean = false;

  mostrarModal() {
    this.mostrar_modal = true;
  }

  accionRecibida(accion: AccionModal) {
    if (accion === 'confirmar') {
      console.log('Confirmado');
    } else if (accion === 'cancelar' || accion === 'cerrar') {
      console.log('Acción cancelada');
    }
    this.mostrar_modal = false;
  }
}
