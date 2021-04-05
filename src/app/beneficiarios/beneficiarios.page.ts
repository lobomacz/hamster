import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';
import { Beneficiario } from '../interfaces/beneficiario';


@Component({
  selector: 'app-beneficiarios',
  templateUrl: './beneficiarios.page.html',
  styleUrls: ['./beneficiarios.page.scss'],
})
export class BeneficiariosPage implements OnInit {

	public beneficiarios:Beneficiario[];
  private token:string;

  constructor(
    private _auth:AuthService,
    private _data:DataService, 
    private _router:Router,
    private toastCtrl:ToastController) { }

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
    this._data.getBeneficiarios(this.token).subscribe((response:HttpResponse<any>) => {
      this.beneficiarios = response.body;
      this._auth.updateSession().then(() => {});
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

  public Logout(){
    this._auth.UserLogout().then(() => {
      let mensaje = '¡Adiós!';
      this.showToast(mensaje, true);
    }).catch((error) => {
      this.showToast(error);
    });
  }


}
