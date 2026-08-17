import { Component, ViewChild } from '@angular/core';
import { AccionModal } from "../modal-component/modal-component.component";

interface Paciente {
  nombre: string;
  dni: number;
}

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss']
})
export class PacienteComponent {
  mostrar_modal: boolean = false;
  pacienteSeleccionado: Paciente | null = null;

  mostrarModal(paciente: Paciente) {
    this.pacienteSeleccionado = paciente;
    this.mostrar_modal = true;
  }

  accionRecibida(accion: AccionModal) {
    if (accion === 'confirmar') {
      console.log('Paciente: ', this.pacienteSeleccionado?.nombre, 'eliminado');
    } else if (accion === 'cancelar' || accion === 'cerrar') {
      console.log('Acción cancelada');
    }
    this.mostrar_modal = false;
    this.pacienteSeleccionado = null;
  }
  
  pacientes: Paciente[] = [
    {
      nombre: 'Paciente 1',
      dni: 11222333
    },
    {
      nombre: 'Paciente 2',
      dni: 22333444
    },
    {
      nombre: 'Paciente 3',
      dni: 33444555
    }
  ]
}
