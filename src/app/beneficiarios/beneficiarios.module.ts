import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeneficiariosPageRoutingModule } from './beneficiarios-routing.module';

import { BeneficiariosPage } from './beneficiarios.page';
import { NewBenefComponent } from './new-benef/new-benef.component';
import { ItemBenefComponent } from './item-benef/item-benef.component';
import { BenefDetailComponent } from './benef-detail/benef-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeneficiariosPageRoutingModule
  ],
  declarations: [BeneficiariosPage, NewBenefComponent, ItemBenefComponent, BenefDetailComponent]
})
export class BeneficiariosPageModule {}
