import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { ToastController, Platform } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';
import { Contribucion } from '../../interfaces/contribucion';
import { Beneficiario } from '../../interfaces/beneficiario';
import { Funcionario } from '../../interfaces/funcionario';
import { Utilities } from '../../clases/utilities';


@Component({
  selector: 'app-contribucion',
  templateUrl: './contribucion.component.html',
  styleUrls: ['./contribucion.component.scss'],
})
export class ContribucionComponent implements OnInit {

	public contribucion:Contribucion;
  public beneficiario:Beneficiario;
  public funcionario:Funcionario;
	public icono:string;
  

  constructor(
    private _auth:AuthService,
  	private _data:DataService, 
    private _router:Router,
  	private _activatedRoute:ActivatedRoute,
    private toastCtrl:ToastController,
    private platform:Platform) { 
  }

  ngOnInit() {

    this.LlenaDatos();

  }

  
  private LlenaDatos(){

    let id = this._activatedRoute.snapshot.paramMap.get('id');

    this._auth.updateSession().then(() => {});

    this._auth.getAuthToken().then((token) => {

      if (!(this.platform.is('desktop') || this.platform.is('mobileweb'))) {
        
        this._data.getContribucionByIdNative(parseInt(id), token.value).then((data) => {
          if (data.data) {

            this.contribucion = <Contribucion>{...JSON.parse(data.data)};

            this._data.getBeneficiarioByIdNative(this.contribucion.beneficiario, token.value).then((data) => {
              if (data.data) {
                this.beneficiario = <Beneficiario>{...JSON.parse(data.data)};
              }
            }).catch((error) => {
              console.error("Error: ".concat(error.error));
              this.showToast(error.error);
            });

            this._data.getFuncionarioByIdNative(this.contribucion.funcionario, token.value).then((data) => {
              if (data.data) {

                this.funcionario = <Funcionario>{...JSON.parse(data.data)};
              }
            }).catch((error) => {
              console.error("Error: ".concat(error.error));
              this.showToast(error.error);
            });

            this.Complementos();

          }
        }).catch((error) => {
          this.showToast(error.error);
        });

      } else {

        this._data.getContribucionById(parseInt(id), token.value).subscribe((response:HttpResponse<any>) => {
        
          this.contribucion = {...response.body};

          this._data.getBeneficiarioById(this.contribucion.beneficiario, token.value).subscribe((response:HttpResponse<any>) => {
            this.beneficiario = {...response.body};
          }, (error:any) => {
            console.error("Error: ".concat(error));
            this.showToast(error);
          });

          this._data.getFuncionarioById(this.contribucion.funcionario, token.value).subscribe((response:HttpResponse<any>) => {
            this.funcionario = {...response.body};
          }, (error:any) => {
            console.error("Error: ".concat(error));
            this.showToast(error);
          });

          this.Complementos();

        }, (error) => {

          console.error("Error: ".concat(error));
          this.showToast(error);
          
        });

      }

    }).catch((error) => {
      this.showToast(error);
    });

    
  }


  private Complementos(){

    this._auth.updateSession().then(() => {});

    this.icono = this._data.Tipos[this.contribucion.tipo].icon;

  }

  async showToast(message:string){
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'middle'
    });

    toast.present();
  }

}
