import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//Paginas
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {FavoritosPage} from '../pages/favoritos/favoritos'
import {CarritoPage} from '../pages/carrito/carrito'
import {PerfilPage} from '../pages/perfil/perfil';

//Paginas Admi
import { AddrestaurantePage } from '../pages/addrestaurante/addrestaurante';
import {AdmirestaurantePage} from '../pages/admirestaurante/admirestaurante'




import { AuthProvider } from '../providers/auth/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Masrestaurantes } from '../services/addrestaurante/addrestaurante';
import { AñadirPerfilUsuarioPage } from '../pages/a\u00F1adir-perfil-usuario/a\u00F1adir-perfil-usuario';
import { AdduserPage } from '../pages/adduser/adduser';
import { FirebaseDbProvider } from '../providers/firebase-db/firebase-db';

export const config = {
  apiKey: "AIzaSyDkRbGa3v8O1YuTzChwDQxMFZ0oce-v0mE",
  authDomain: "eat-time-8dbe0.firebaseapp.com",
  databaseURL: "https://eat-time-8dbe0.firebaseio.com",
  projectId: "eat-time-8dbe0",
  storageBucket: "eat-time-8dbe0.appspot.com",
  messagingSenderId: "592954673951"


};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FavoritosPage,
    CarritoPage,
    AddrestaurantePage,
    AdmirestaurantePage,
    PerfilPage,
    AdduserPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FavoritosPage,
    CarritoPage,
    AddrestaurantePage,
    AdmirestaurantePage,
    PerfilPage,
    AdduserPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    Masrestaurantes,
    FirebaseDbProvider
  ]
})
export class AppModule {}
