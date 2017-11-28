import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Menu } from '../../assets/models/Restaurantes';
import { Masrestaurantes } from '../../services/addrestaurante/addrestaurante';



@IonicPage()
@Component({
  selector: 'page-editrestaurante',
  templateUrl: 'editrestaurante.html',
})
export class EditrestaurantePage {
  item : Menu ;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private addrest:Masrestaurantes) {
  }

  
  ionViewWillLoad() {
   this.item=this.navParams.get('item');
   }
  saveitem(item:Menu){
    this.addrest.edititem(item).then(() => {
      this.navCtrl.setRoot('AdmirestaurantePage');
    });
  }

}
