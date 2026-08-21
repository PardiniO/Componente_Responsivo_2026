import { Component, ViewChild } from '@angular/core';
import { PacienteWizardComponent } from "../paciente-wizard/paciente.component";
import { HorarioComponent } from "../horario/horario.component";
import { ITurno } from "../../../interfaces/i-turno";
import { IPasosWizard } from '../../../interfaces/i-pasos-wizard';
import { EspecialidadProfecionalComponent } from '../especialidad-profecional/especialidad-profecional.component';
import { ConfirmacionComponent } from '../confirmacion/confirmacion.component';

@Component({
  selector: 'app-alta-turnos',
  templateUrl: './alta-turnos.component.html',
  styleUrl: './alta-turnos.component.scss'
})
export class AltaTurnosComponent {
  pasoActual: number = 1;
  totalPasos: number = 3;

  datosTurno: ITurno = {
    pacienteId: null,
    especialidadId: null,
    profecionalId: null,
    fecha: null,
    hora: null
  };

  @ViewChild('refPaciente') pacienteComponent!: PacienteWizardComponent;
  @ViewChild('refFecha') fechaHoraComponent!: HorarioComponent;
  @ViewChild('refEspecialidadProfecional') especialidadProfecionalComp!: EspecialidadProfecionalComponent;
  @ViewChild('refConfirmacion') confirmacionComponent!: ConfirmacionComponent;

  obtenerTitulo(): string {
    switch(this.pasoActual) {
      case 1: return 'Seleccionar Paciente';
      case 2: return 'Fecha, Hora, Especialidad y profecional';
      case 3: return 'Confirmación';
      default: return '';
    }
  }

  obtenerPasoActual(): IPasosWizard | undefined {
    switch (this.pasoActual) {
      case 1: return this.pacienteComponent;
      case 2: return this.fechaHoraComponent;
      case 3: return this.confirmacionComponent;
      default: return undefined;
    }
  }

  guardarPaciente(id: number | null): void {
    this.datosTurno.pacienteId = id;
  }

  guardarFechaHora(datos: { fecha: string | null, hora: string | null }):void {
    this.datosTurno.fecha = datos.fecha;
    this.datosTurno.hora = datos.hora;
  }

  guardarEspecialidadProfecional(datos: { especialidadId: number | null, profecionalId: number | null }): void {
    this.datosTurno.especialidadId = datos.especialidadId;
    this.datosTurno.profecionalId = datos.profecionalId;
  }

  siguiente(): void {
    if (this.pasoActual < this.totalPasos) {
      this.pasoActual++;
    }
  }

  anterior(): void {
    if (this.pasoActual > 1) {
      this.pasoActual--;
    }
  }

  guardarTurnoCompleto(): void {
    console.log('Guardando los datos', this.datosTurno);
    alert('Turno guardado con éxito');
  }
}
