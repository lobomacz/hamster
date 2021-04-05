import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeneficiariosPage } from './beneficiarios.page';
import { NewBenefComponent } from './new-benef/new-benef.component';
import { BenefDetailComponent } from './benef-detail/benef-detail.component';

const routes: Routes = [
  {
    path: '',
    component: BeneficiariosPage
  },
  {
  	path: 'nuevo',
  	component: NewBenefComponent
  },
  {
  	path: 'nuevo/:ref',
  	component: NewBenefComponent
  },
  {
  	path: 'ver/:id',
  	component: BenefDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeneficiariosPageRoutingModule {}
