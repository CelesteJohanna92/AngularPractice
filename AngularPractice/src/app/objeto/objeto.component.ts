import { Component } from '@angular/core';

@Component({
  selector: 'app-objeto',
  imports: [],
  templateUrl: './objeto.component.html',
  styleUrl: './objeto.component.css'
})
export class ObjetoComponent {
  datos = {
    nombre: 'Celeste',
    edad: 32,
    ocupacion: 'Desarrolladora',
    ciudad: 'Buenos Aires'
  };
}
