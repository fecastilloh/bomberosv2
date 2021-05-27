import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateCompaniaPage } from './create-compania.page';

const routes: Routes = [
  {
    path: '',
    component: CreateCompaniaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateCompaniaPageRoutingModule {}
