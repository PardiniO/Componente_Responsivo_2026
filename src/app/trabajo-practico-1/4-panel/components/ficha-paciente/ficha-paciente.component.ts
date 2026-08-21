import { Component } from '@angular/core';
import { IPanel } from '../../interfaces/i-panel';

@Component({
  selector: 'app-ficha-paciente',
  templateUrl: './ficha-paciente.component.html',
  styleUrls: ['./ficha-paciente.component.scss']
})
export class FichaPacienteComponent {
  estadoPaneles: IPanel = {
    datosPersonales: true,
    historialTurnos: false,
    notasProfesional: false
  };

  actualizarEstado(panel: keyof IPanel, nuevoEstado: boolean): void {
    this.estadoPaneles[panel] = nuevoEstado;
    console.log(`El panel "${panel}" ahora está ${nuevoEstado ? 'expandido' : 'contraído'}`);
  }
}
