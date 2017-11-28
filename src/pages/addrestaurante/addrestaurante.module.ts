import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddrestaurantePage } from './addrestaurante';

@NgModule({
  declarations: [
    AddrestaurantePage,
  ],
  imports: [
    IonicPageModule.forChild(AddrestaurantePage),
  ],
})
export class AddrestaurantePageModule {}
