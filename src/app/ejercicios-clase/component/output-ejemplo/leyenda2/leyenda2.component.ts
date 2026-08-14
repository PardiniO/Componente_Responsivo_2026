import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-leyenda2',
  templateUrl: './leyenda2.component.html',
  styleUrl: './leyenda2.component.scss'
})
export class Leyenda2Component {
  @Input() item: string = '';
  @Output() alHacerClick = new EventEmitter<string>;

  avisarAlPadre(){
    this.alHacerClick.emit('hola desde el hijo');
  }
}
