import {Component} from '@angular/core';

@Component({
    selector:'app-heroe',
    templateUrl:'./heroe.component.html',
    styleUrls:['./heroe.component.css']
})
export class HeroeComponent{
    nombre: string = "superman";
    edad: number = 40;

    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string{
        return this.nombre + ' - ' + this.edad;
        //return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre(): void{
        this.nombre = 'Hulk';
    }

    cambiarEdad(): void{
        this.edad = 44;
    }
}