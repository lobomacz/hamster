import { Component, OnInit, Input } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Contribucion } from '../../interfaces/contribucion';
import { Beneficiario } from '../../interfaces/beneficiario';
import { Funcionario } from '../../interfaces/funcionario';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-item-contribucion',
  templateUrl: './item-contribucion.component.html',
  styleUrls: ['./item-contribucion.component.scss'],
})
export class ItemContribucionComponent implements OnInit {

  @Input() contribucion: Contribucion;
  @Input() token:string;
  public beneficiario:Beneficiario;
  public funcionario:Funcionario;
  public icono:string;

  constructor(private _data:DataService) { }

  ngOnInit() {
    this.icono = this._data.Tipos[this.contribucion.tipo].icon;
    this._data.getBeneficiarioById(this.contribucion.beneficiario, this.token).subscribe((response:HttpResponse<any>) => {
    	this.beneficiario = {...response.body};
    });
    this._data.getFuncionarioById(this.contribucion.funcionario, this.token).subscribe((response:HttpResponse<any>) => {
    	this.funcionario = {...response.body};
    });
  }

}
