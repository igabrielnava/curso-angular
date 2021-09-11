import { Component, OnInit } from "@angular/core"

@Component({
    selector:'app-listado',
    templateUrl:'./listado.component.html',
    styleUrls:['./listado.component.css']

})
export class ListadoComponent implements OnInit{

    heroeBorrado: string = "";

    constructor(){
        console.log("constructor");
    }

    ngOnInit(): void{
        console.log("ngOnInit");
    }

    heroes: string[] = ['superman', 'hulk', 'ironman', 'thor', 'capitán américa'];

    borrarHeroe(): void{
        console.log("borrando heroe");
        this.heroeBorrado = this.heroes.shift() || '';
        console.log("Heroe borrado ", this.heroeBorrado);
    }



}