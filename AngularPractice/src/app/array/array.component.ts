import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-array',
  imports: [NgFor],
  templateUrl: './array.component.html',
  styleUrl: './array.component.css'
})
export class ArrayComponent {
  elementos = [
    { nombre: 'Elemento 1', valor: 10 },
    { nombre: 'Elemento 2', valor: 20 },
    { nombre: 'Elemento 3', valor: 30 },
    { nombre: 'Elemento 4', valor: 40 },
  ];
}
