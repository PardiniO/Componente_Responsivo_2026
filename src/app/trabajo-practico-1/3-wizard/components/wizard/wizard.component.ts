import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPasosWizard } from '../../interfaces/i-pasos-wizard';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrl: './wizard.component.scss'
})
export class WizardComponent {
  @Input() pasoActual!: number;
  @Input() totalPasos!: number;
  @Input() tituloPaso!: string;
  @Input() pasoActivoInstancia!: IPasosWizard | undefined;
  
  @Output() avanzar = new EventEmitter<void>();
  @Output() retroceder = new EventEmitter<void>();
  @Output() confirmar = new EventEmitter<void>();
  
  mostrarError: boolean = false;

  anterior(): void {
    this.mostrarError;
    this.retroceder.emit();
  }

  siguiente(): void {
    if (this.pasoActivoInstancia && this.pasoActivoInstancia.esValido()) {
      this.mostrarError;
      this.avanzar.emit();
    } else {
      this.mostrarError = true;
    }
  }

  finalizar(): void {
    if (this.pasoActivoInstancia && this.pasoActivoInstancia.esValido()) {
      this.mostrarError;
      this.confirmar.emit();
    } else {
      this.mostrarError = true;
    }
  }
}
