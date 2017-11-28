import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { Item } from 'ionic-angular/components/item/item';


//import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import {Menu} from '../../assets/models/Restaurantes';
import { Masrestaurantes } from '../../services/addrestaurante/addrestaurante';
/**
 * Generated class for the AddrestaurantePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addrestaurante',
  templateUrl: 'addrestaurante.html',
})
export class AddrestaurantePage {
  item : Menu = {
    nombre :'',
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private addres:Masrestaurantes) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddrestaurantePage');
  }

  additem(item:Menu){
    this.addres.additem(item).then(ref =>{
     this.navCtrl.setRoot('AdmirestaurantePage',{key: ref.key})
     });

  }

  

}
