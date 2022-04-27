import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  /**
   * nuevo: valor por defecto a establecer al componente
   */
  nuevo: Personaje = { 
    nombre: 'Maestro Roshi',
    poder: 400
  }
 
  constructor() { }

}
