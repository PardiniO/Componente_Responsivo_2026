import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { WizardComponent } from '../../wizard/wizard.component';
import { IPasosWizard } from '../../../interfaces/i-pasos-wizard';

export interface Pacientes {
  id: number;
  nombre: string;
}
@Component({
  selector: 'app-paciente-wizard',
  templateUrl: './paciente.component.html',
  styleUrl: './paciente.component.scss'
})
export class PacienteWizardComponent implements IPasosWizard{
  @Output() pacienteSeleccionado = new EventEmitter<number | null>();
  
  private pacienteId: number | null = null;
  
  pacientes: Pacientes[] = [
    { id: 1, nombre: 'Sebastián' },
    { id: 2, nombre: 'Julieta' },
    { id: 3, nombre: 'Hernán' },
    { id: 4, nombre: 'Fernanda' }
  ];

  seleccionarPaciente(event: Event): void {
    const select = event.target as HTMLSelectElement;

    this.pacienteId = select.value ? parseInt(select.value, 10): null;
    this.pacienteSeleccionado.emit(this.pacienteId);
  }

  esValido(): boolean {
    return this.pacienteId !== null;
  }
}
