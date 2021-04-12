import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeneficiariosPage } from './beneficiarios.page';
import { NewBenefComponent } from './new-benef/new-benef.component';
import { BenefDetailComponent } from './benef-detail/benef-detail.component';
import { AuthGuard } from '../guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: BeneficiariosPage
  },
  {
  	path: 'nuevo',
    canActivate: [AuthGuard],
  	component: NewBenefComponent
  },
  {
  	path: 'nuevo/:ref',
    canActivate: [AuthGuard],
  	component: NewBenefComponent
  },
  {
  	path: 'ver/:id',
    canActivate: [AuthGuard],
  	component: BenefDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeneficiariosPageRoutingModule {}
