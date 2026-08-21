import { Injectable } from '@angular/core';
import { TurnoInterface } from "../interfaces/turno-interface";

@Injectable({
  providedIn: 'root'
})
export class TurnosService {
  
  private turnos: TurnoInterface[] = [
    {
      id: 1,
      fecha: '17-05-26',
      hora: '20:23',
      paciente: 'juliana',
      estado: 'pendiente'
    },
    {
      id: 2,
      fecha: '01-03-26',
      hora: '20:23',
      paciente: 'erika',
      estado: 'confirmado'
    },
    {
      id: 3,
      fecha: '29-2-26',
      hora: '20:23',
      paciente: 'fernando',
      estado: 'pendiente'
    }
  ];

  constructor() { }

  obtenerTodos(): TurnoInterface[] {
    return this.turnos;
  }

  obtenerPorId(id: number): TurnoInterface | undefined {
    return this.turnos.find(turno => turno.id === id);
  }

  crearTurno(turno: TurnoInterface): void {
    this.turnos.push(turno);
  }

  cambiarEstado(id: number, nuevoEstado: 'pendiente' | 'confirmado' | 'cancelado'): void {
    const turno = this.obtenerPorId(id);
    if (turno) {
      turno.estado = nuevoEstado;
    }
  }
  
  eliminartTurno(id: number): void {
    this.turnos = this.turnos.filter(t => t.id !== id);
  }

}
