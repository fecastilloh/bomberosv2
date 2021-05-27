import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateCompaniaPageRoutingModule } from './create-compania-routing.module';

import { CreateCompaniaPage } from './create-compania.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateCompaniaPageRoutingModule
  ],
  declarations: [CreateCompaniaPage]
})
export class CreateCompaniaPageModule {}
