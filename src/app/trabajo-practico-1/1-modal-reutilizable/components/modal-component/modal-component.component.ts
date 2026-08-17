import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';

export type AccionModal = 'confirmar' | 'cancelar' | 'cerrar';

@Component({
  selector: 'app-modal-component',
  templateUrl: './modal-component.component.html',
  styleUrls: ['./modal-component.component.scss']
})
export class ModalComponentComponent {
  @Output() accionAvisada = new EventEmitter<AccionModal>();

  avisarAccion(tipo: AccionModal) {
    this.accionAvisada.emit(tipo);
  }
}
