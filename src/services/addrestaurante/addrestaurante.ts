import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import {Menu} from '../../assets/models/Restaurantes';

@Injectable()

export class Masrestaurantes{
    private addlistRestaurantes = this.db.list<Menu>('Menulist');


    constructor(private db : AngularFireDatabase){

    }
    getAddRestaurante(){
        return this.addlistRestaurantes;
    }

    additem(item:Menu){
        return this.addlistRestaurantes.push(item)
    }
    edititem(item:Menu){
        return this.addlistRestaurantes.update(item.key,item);
    }
    
}