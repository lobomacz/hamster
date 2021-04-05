import { Component, OnInit, Input } from '@angular/core';
import { Beneficiario } from '../../interfaces/beneficiario';
import { DataService } from '../../services/data.service';
import { Utilities } from '../../clases/utilities';

@Component({
  selector: 'app-item-benef',
  templateUrl: './item-benef.component.html',
  styleUrls: ['./item-benef.component.scss'],
})
export class ItemBenefComponent implements OnInit {

	@Input() beneficiario:Beneficiario;
	public color:string = '';

  constructor(private _data:DataService) { }

  ngOnInit() {
  	this.color = Utilities.BadgeColor(this.beneficiario.contribuciones.length);
  }

}
