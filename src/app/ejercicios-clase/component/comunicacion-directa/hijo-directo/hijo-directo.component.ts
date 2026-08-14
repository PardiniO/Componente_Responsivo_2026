import { Component, ViewChild } from '@angular/core';

@ViewChild /*Acceder a un componente hijo*/

@Component({
  selector: 'app-hijo-directo',
  templateUrl: './hijo-directo.component.html',
  styleUrl: './hijo-directo.component.scss'
})
export class HijoDirectoComponent {  
  valor: number = 20;    
  reset(){this.valor = 0;}
}
