import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';
import { Contribucion } from '../../interfaces/contribucion';
import { Beneficiario } from '../../interfaces/beneficiario';
import { Funcionario } from '../../interfaces/funcionario';


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
  private token:string;

  constructor(
    private _auth:AuthService,
  	private _data:DataService, 
    private _router:Router,
  	private _activatedRoute:ActivatedRoute,
    private toastCtrl:ToastController) { 
  }

  ngOnInit() {

    this.CheckSession();

  }

  private CheckSession(){

    this._auth.getSession().then((val) => {

      if (val.value) {

        let session:number = parseInt(val.value);

        this._auth.getAuthToken().then((uval) => {

          let authtoken = uval.value;
          this.token = authtoken;
          let expiracion = new Date(session);
          this.CheckExpiration(expiracion);

        }).catch((err) => {
          this.showToast(err, true);
        });

      } else {
        let mensaje = 'Acceso Denegado';
        this.showToast(mensaje, true);
      }
     

    }).catch((error) => {
      this.showToast(error, true);
    });

  }

  private CheckExpiration(sessionDate:Date){

    let hoy:Date = new Date();

    if (sessionDate < hoy) {
      let mensaje = 'Sesión Expirada';
      this.showToast(mensaje, true);
    } else {
      this.LlenaDatos();
    }

  }

  private LlenaDatos(){

    let id = this._activatedRoute.snapshot.paramMap.get('id');

    this._data.getContribucionById(parseInt(id), this.token).subscribe((response:HttpResponse<any>) => {
      
      this.contribucion = {...response.body};

      this._auth.updateSession().then(() => {});

      this.icono = this._data.Tipos[this.contribucion.tipo].icon;

      this._data.getBeneficiarioById(this.contribucion.beneficiario, this.token).subscribe((response:HttpResponse<any>) => {
        this.beneficiario = {...response.body};
      });

      this._data.getFuncionarioById(this.contribucion.funcionario, this.token).subscribe((response:HttpResponse<any>) => {
        this.funcionario = {...response.body};
      });

    }, (error) => {

      this.showToast(error);
      
    });
  }

  async showToast(message:string, redirect:boolean=false){
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'middle'
    });

    if (redirect == true) {
      toast.onDidDismiss().then(() => {
        this._router.navigateByUrl('/login');
      });
    }

    toast.present();
  }

}
