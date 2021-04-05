import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioPage } from './inicio.page';
import { ContribucionComponent } from './contribucion/contribucion.component';
import { NuevaContribucionComponent } from './nueva-contribucion/nueva-contribucion.component';

const routes: Routes = [
  {
    path: '',
    component: InicioPage
  },
  {
  	path: 'ver/:id',
  	component: ContribucionComponent
  },
  {
    path: 'nuevo',
    component: NuevaContribucionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioPageRoutingModule {}
