import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  mensaje1: string = "Este es el primer mensaje";
mensaje2: string = "Este es el segundo mensaje";
mostrarMensaje2: boolean = false;
mostrarMensaje: any;
  };


