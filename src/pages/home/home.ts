import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
// We import the authentication provider to test the log-out function.
import { AuthProvider } from '../../providers/auth/auth';
import { Observable } from 'rxjs/Observable';

//
//import { AngularFireDatabase,FirebaseListObservable, } from 'angularfire2/Database-deprecated';

import {Menu} from '../../assets/models/Restaurantes';
import { Masrestaurantes } from '../../services/addrestaurante/addrestaurante';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  menuRef$: Observable <Menu[]>; 

  constructor(public navCtrl: NavController, public authProvider: AuthProvider,
              private addrest:Masrestaurantes,public navParams: NavParams) {

                this.menuRef$=this.addrest
                .getAddRestaurante()
                .snapshotChanges()
                .map(
                  changes =>
                  {
                    return changes.map(c =>({
                      key: c.payload, ...c.payload.val()
                    }));
                  });

   // this.menuRef$ = this.database.list('Menulist');
  }
 

  /**
   * Calls the authentication provider and logs the user out, on successful logout it sends the user
   * back to the login page.
   */
  logMeOut() {
    this.authProvider.logoutUser().then( () => {
      this.navCtrl.setRoot('LoginPage');
    });
  }

}
