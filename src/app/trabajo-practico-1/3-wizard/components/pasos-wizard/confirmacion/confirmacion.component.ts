import { Component, Input } from '@angular/core';
import { IPasosWizard } from '../../../interfaces/i-pasos-wizard';
import { ITurno } from '../../../interfaces/i-turno';

@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.component.html',
  styleUrl: './confirmacion.component.scss'
})
export class ConfirmacionComponent implements IPasosWizard{
  @Input() datosTurno!: ITurno;

  esValido(): boolean {
    return true;
  }
}
