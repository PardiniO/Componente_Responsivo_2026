import { Component } from '@angular/core';
import { AccionModal } from "../modal-component/modal-component.component";

interface Turno {
  nombre: string;
}

@Component({
  selector: 'app-turno',
  templateUrl: './turno.component.html',
  styleUrls: ['./turno.component.scss']
})
export class TurnoComponent {
  turnoSeleccionado: Turno | null = null;
  mostrar_modal: boolean = false;

  mostrarModal(turno: Turno) {
    this.turnoSeleccionado = turno;
    this.mostrar_modal = true;
  }

  accionRecibida(accion: AccionModal) {
    if (accion === 'confirmar') {
      console.log('Turno: ', this.turnoSeleccionado?.nombre, 'cancelado.');
    } else if (accion === 'cancelar' || accion === 'cerrar') {
      console.log('Acción cancelada');
    }
    this.mostrar_modal = false;
    this.turnoSeleccionado = null;
  }
  
  turnos: Turno[] = [
    {
      nombre: 'Turno 1'
    },
    {
      nombre: 'Turno 2'
    },
    {
      nombre: 'Turno 3'
    }
  ]
}
