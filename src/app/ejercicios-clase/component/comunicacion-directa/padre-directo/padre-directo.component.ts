import { Component, ViewChild } from '@angular/core';
import { HijoDirectoComponent } from "../hijo-directo/hijo-directo.component";

@Component({
  selector: 'app-padre-directo',
  templateUrl: './padre-directo.component.html',
  styleUrl: './padre-directo.component.scss'
})
export class PadreDirectoComponent {
  @ViewChild(HijoDirectoComponent) contador!: HijoDirectoComponent
  resetearContador(){
    this.contador.reset();
  }
}
