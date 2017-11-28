import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdmirestaurantePage } from './admirestaurante';

@NgModule({
  declarations: [
    AdmirestaurantePage,
  ],
  imports: [
    IonicPageModule.forChild(AdmirestaurantePage),
  ],
})
export class AdmirestaurantePageModule {}
