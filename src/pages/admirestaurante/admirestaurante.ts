import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';


import {Menu} from '../../assets/models/Restaurantes';
import { Masrestaurantes } from '../../services/addrestaurante/addrestaurante';
import { Observable } from 'rxjs/Observable';
/**
 * Generated class for the AdmirestaurantePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



@Component({
  selector: 'page-admirestaurante',
  templateUrl: 'admirestaurante.html',
})
export class AdmirestaurantePage {

  menuRef$: Observable <Menu[]>; 

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private addrest:Masrestaurantes) {
    this.menuRef$=this.addrest
    .getAddRestaurante()
    .snapshotChanges()
    .map(
      changes =>{
        return changes.map(c =>({
          key: c.payload, ...c.payload.val()
        }));
      });
      
  }
  
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdmirestaurantePage');
  }

}
