import { Component, OnInit } from '@angular/core';
import { TurnoInterface } from '../../interfaces/turno-interface';
import { TurnosService } from '../../services/turnos.service';

@Component({
  selector: 'app-lista-turnos',
  templateUrl: './lista-turnos.component.html',
  styleUrls: ['./lista-turnos.component.scss']
})
export class ListaTurnosComponent implements OnInit {

  turnos: TurnoInterface[] = [];

  constructor (
    private turnoService: TurnosService
  ) {}

  ngOnInit(): void {
    this.turnos = this.turnoService.obtenerTodos();
    console.log(this.turnos);
  }
  
  confirmar(id: number): void {
    this.turnoService.cambiarEstado(id, 'confirmado');
  }
  
  modificarEstado(id: number, nuevoEstado: 'pendiente' | 'confirmado' | 'cancelado'): void {
    this.turnoService.cambiarEstado(id, nuevoEstado);
  }

  cargarTurno():void{
    this.turnoService.cargarTurno = !this.cargarTurno;
  }
}
