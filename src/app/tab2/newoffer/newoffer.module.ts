import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewofferPageRoutingModule } from './newoffer-routing.module';

import { NewofferPage } from './newoffer.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    NewofferPageRoutingModule
  ],
  declarations: [NewofferPage]
})
export class NewofferPageModule {}
