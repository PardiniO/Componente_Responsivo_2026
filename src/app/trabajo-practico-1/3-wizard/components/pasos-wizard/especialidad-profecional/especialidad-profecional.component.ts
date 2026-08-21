import { Component, EventEmitter, Output } from '@angular/core';
import { IPasosWizard } from '../../../interfaces/i-pasos-wizard';

@Component({
  selector: 'app-especialidad-profecional',
  templateUrl: './especialidad-profecional.component.html',
  styleUrl: './especialidad-profecional.component.scss'
})
export class EspecialidadProfecionalComponent implements IPasosWizard{
  @Output() seleccion = new EventEmitter<{ especialidadId: number | null, profecionalId: number | null }>();

  especialidadId: number | null = null;
  profecionalId: number | null = null;

  seleccionarEspecialidad(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.especialidadId = select.value ? parseInt(select.value, 10) : null;
    this.emitirCambios();
  }

  seleccionarProfecional(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.profecionalId = select.value ? parseInt(select.value, 10) : null;
    this.emitirCambios();
  }

  private emitirCambios(): void {
    this.seleccion.emit({
      especialidadId: this.especialidadId,
      profecionalId: this.profecionalId
    });
  }

  esValido(): boolean {
    return this.especialidadId !== null && this.profecionalId !== null;
  }
}