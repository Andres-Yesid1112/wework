import { Component, Input } from '@angular/core';
import { ContenidoIntf } from '../contenido-intf';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent {
  @Input() contenido: ContenidoIntf;

  constructor(){
    this.contenido = {}
  }
}
