import { Component, OnInit, Input } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Platform } from '@ionic/angular';
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

  constructor(private _data:DataService, private platform:Platform) { }

  ngOnInit() {
    
    this.icono = this._data.Tipos[this.contribucion.tipo].icon;

    if (!(this.platform.is('desktop') || this.platform.is('mobileweb'))) {
      this._data.getBeneficiarioByIdNative(this.contribucion.beneficiario, this.token).then((data) => {
        this.beneficiario = <Beneficiario>{...JSON.parse(data.data)}; 
      });
      this._data.getFuncionarioByIdNative(this.contribucion.funcionario, this.token).then((data) => {
        this.funcionario = <Funcionario>{...JSON.parse(data.data)};
      });
    } else {
      this._data.getBeneficiarioById(this.contribucion.beneficiario, this.token).subscribe((response:HttpResponse<any>) => {
        this.beneficiario = {...response.body};
      });
      this._data.getFuncionarioById(this.contribucion.funcionario, this.token).subscribe((response:HttpResponse<any>) => {
        this.funcionario = {...response.body};
      });
    }
    
  }

}
