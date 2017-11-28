import { Component,ViewChild } from '@angular/core';
import { Platform,Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuth } from 'angularfire2/auth';

import { HomePage } from '../pages/home/home';
import {FavoritosPage} from '../pages/favoritos/favoritos';
import {CarritoPage} from '../pages/carrito/carrito';
import {PerfilPage} from '../pages/perfil/perfil';
//admi
import { AddrestaurantePage } from '../pages/addrestaurante/addrestaurante';
import {AdmirestaurantePage }from '../pages/admirestaurante/admirestaurante';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,afAuth: AngularFireAuth) {

   

      this.pages = [
        { title: 'Home', component: HomePage },
        {title : 'Favoritos',component :FavoritosPage},
        {title : 'Carrito',component :CarritoPage },
        { title: 'AddRestuarante',component: AddrestaurantePage},
        {title : 'AdmirestaurantePage',component: AdmirestaurantePage},
        {title : 'Perfil' ,component: PerfilPage}
      ];

     
  
    
    
    const authObserver = afAuth.authState.subscribe( user => {
      if (!user) { 
        this.rootPage = 'LoginPage';
        authObserver.unsubscribe();
      } else {
        this.rootPage = HomePage;
        authObserver.unsubscribe();
      }
    });


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  //openPageAdmi(pagesAdmi) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
   // this.nav.setRoot(pagesAdmi.components);
  //}
  
}

