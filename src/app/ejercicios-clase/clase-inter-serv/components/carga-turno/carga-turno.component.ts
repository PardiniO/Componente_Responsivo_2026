import { Component, EventEmitter, Output } from '@angular/core';
import { TurnoInterface } from '../../interfaces/turno-interface';
import { TurnosService } from '../../services/turnos.service';

@Component({
  selector: 'app-carga-turno',
  templateUrl: './carga-turno.component.html',
  styleUrl: './carga-turno.component.scss'
})
export class CargaTurnoComponent {
  @Output() cancelarTurno = new EventEmitter<void>();

  turno: TurnoInterface = {
    id: 0,
    fecha: '',
    hora: '',
    paciente: '',
    estado: 'pendiente'
  };

  constructor(private turnoService: TurnosService) {}

  crearTurno(): void {
    console.log('Turno creado:', this.turno);
    this.turnoService.crearTurno(this.turno);
  }

  cancelar(): void {
    this.cancelarTurno.emit();
  }
}
