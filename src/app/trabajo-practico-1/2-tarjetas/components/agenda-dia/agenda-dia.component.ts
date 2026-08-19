import { Component } from '@angular/core';

export type EstadoTurno = 'pendiente' | 'confirmado' | 'cancelado';

export interface Turnos {
  turnoNro: number;
  hora: String;
  paciente: String;
  estado: EstadoTurno;
}

@Component({
  selector: 'app-agenda-dia',
  templateUrl: './agenda-dia.component.html',
  styleUrl: './agenda-dia.component.scss'
})
export class AgendaDiaComponent {
  turnos: Turnos[] = [
    {
      turnoNro: 1,
      hora: '14:00',
      paciente: 'Ana María',
      estado: 'pendiente'
    },
    {
      turnoNro: 2,
      hora: '15:00',
      paciente: 'Mario Antonio',
      estado: 'confirmado'
    },
    {
      turnoNro: 3,
      hora: '16:30',
      paciente: 'Carmen',
      estado: 'cancelado'
    },
    {
      turnoNro: 4,
      hora: '17:50',
      paciente: 'Roberto',
      estado: 'cancelado'
    },
    {
      turnoNro: 5,
      hora: '18:20',
      paciente: 'Julieta',
      estado: 'pendiente'
    },
  ];

  actualizarEstado(
    turnoNro: number,
    estado: EstadoTurno
  ): void {
    const turnoEncontrado = this.turnos.find(
      turnoEncontrado => turnoEncontrado.turnoNro === turnoNro
    );
    if (turnoEncontrado) {
      turnoEncontrado.estado = estado;
    }
  }
}
