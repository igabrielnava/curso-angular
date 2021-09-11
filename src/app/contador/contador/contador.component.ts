import {Component} from '@angular/core';

@Component({
    selector:'app-contador',
    templateUrl:'./contador.component.html',
    styleUrls:['./contador.component.css']
})
export class ContadorComponent{

    base: number = 10;

    ejecutaOperacion(valor: number): void{
        this.base += valor;
    }

}