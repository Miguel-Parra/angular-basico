import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";


@Injectable()
export class DbzService {
    
    private _personajes: Personaje[] = [
        { nombre: 'Goku', poder: 15000 },
        { nombre: 'Vegeta', poder: 12000 }
    ];
    
    get personajesGet(): Personaje[] {
        return [...this._personajes]
    }
    
    constructor() {
        console.log('Servicio inicializado')
    }

    agregarPersonaje(nuevo: Personaje): void{
        this._personajes.push(nuevo)
    }

}