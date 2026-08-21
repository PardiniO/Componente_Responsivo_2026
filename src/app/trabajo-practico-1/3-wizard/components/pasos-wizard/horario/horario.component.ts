import { Component, EventEmitter, Output } from '@angular/core';
import { IPasosWizard } from '../../../interfaces/i-pasos-wizard';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrl: './horario.component.scss'
})
export class HorarioComponent implements IPasosWizard {
  @Output() seleccion = new EventEmitter<{ fecha: string | null, hora: string | null }>();

  fecha: string | null = null;
  hora: string | null = null;

  seleccionarFecha(event: Event): void {
    const input = event.target as HTMLSelectElement;
    this.fecha = input.value || null;
    this.emitirCambios();
  }
  
  seleccionarHora(event: Event): void {
    const input = event.target as HTMLSelectElement;
    this.hora = input.value || null;
    this.emitirCambios();
  }

  private emitirCambios(): void {
    this.seleccion.emit({
      fecha: this.fecha,
      hora: this.hora
    });
  }

  esValido(): boolean {
    return this.fecha !== null && this.hora !== null;
  }
}
