import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioPage } from './inicio.page';
import { ContribucionComponent } from './contribucion/contribucion.component';
import { NuevaContribucionComponent } from './nueva-contribucion/nueva-contribucion.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: InicioPage
  },
  {
  	path: 'ver/:id',
    canActivate: [AuthGuard],
  	component: ContribucionComponent
  },
  {
    path: 'nuevo',
    canActivate: [AuthGuard],
    component: NuevaContribucionComponent
  },
  {
    path: 'nuevo/:ref',
    canActivate: [AuthGuard],
    component: NuevaContribucionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioPageRoutingModule {}
