import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EstadoTurno, Turnos } from '../agenda-dia/agenda-dia.component';

@Component({
  selector: 'app-turno-card',
  templateUrl: './turno-card.component.html',
  styleUrl: './turno-card.component.scss'
})
export class TurnoCardComponent {
  @Input() turno!: Turnos;
  @Output() estadoTurno = new EventEmitter<EstadoTurno>();

  confirmar() {
    this.estadoTurno.emit('confirmado');
  }

  cancelar() {
    this.estadoTurno.emit('cancelado');
  }
}
