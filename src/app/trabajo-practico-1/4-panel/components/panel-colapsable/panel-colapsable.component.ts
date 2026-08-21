import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-panel-colapsable',
  templateUrl: './panel-colapsable.component.html',
  styleUrls: ['./panel-colapsable.component.scss']
})
export class PanelColapsableComponent {
  @Input() titulo!: string;
  @Input() expandido = false;

  @Output() estadoCambiado = new EventEmitter<boolean>();

  alternarPanel(): void {
    this.expandido = !this.expandido;
    this.estadoCambiado.emit(this.expandido);
  }
}
