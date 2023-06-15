import { Component } from '@angular/core';
import { ContenidoIntf } from './contenido-intf';

@Component({
  selector: 'app-seccion-dos',
  templateUrl: './seccion-dos.component.html',
  styleUrls: ['./seccion-dos.component.css']
})
export class SeccionDosComponent {
  public contenidos: Array<ContenidoIntf> = [
    {
      img: '../../../../assets/seccion-dos-uno.png',
      titulo: 'Membresía de coworking',
      texto: 'Hot desks, salas de estar, cabinas telefónicas y más',
      cantidad: 'más de 1'
    },
    {
      img: '../../../../assets/seccion-dos-dos.png',
      titulo: 'Escritorio dedicado',
      texto: 'Tu propio escritorio en una oficina compartida',
      cantidad: '1-4'
    },
    {
      img: '../../../../assets/seccion-dos-tres.png',
      titulo: 'Oficina Privada',
      texto: 'Oficinas listas para equipos de cualquier tamaño',
      cantidad: '1-100+'
    },
    {
      img: '../../../../assets/seccion-dos-cuatro.png',
      titulo: 'Sala de reuniones',
      texto: 'Salas privadas que se pueden reservar por hora',
      cantidad: '1-20'
    }
  ]
}
