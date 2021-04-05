import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Contribucion } from '../interfaces/contribucion';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  @ViewChild('searchField') cedulaField:any;
  public token:string;
  public contribuciones:Contribucion[];
  public cedula:string;
  

  constructor(
    private _data:DataService, 
    private _auth:AuthService,
    private _router:Router,
    private toastCtrl:ToastController,
    ) { }

  refresh(ev){
    
    this.LlenaDatos(true, ev);
    
  }

  LlenaDatos(refresh:boolean=false, event?:any){
  	this._data.getContribuciones(this.token).subscribe((response:HttpResponse<any>) => {
      this.contribuciones = response.body;
      this._auth.updateSession().then(() => {});
      if (refresh == true) {
        event.detail.complete();
      }
    }, (error) => {
      this.showToast(error, false);
    });
  }

  ngOnInit() {
    
    this.CheckSession();

  }

  ContribucionesPorBeneficiario(){
    console.log(this.cedulaField.valid);
    if (this.cedulaField.valid) {
      this._data.getContribucionesPorBeneficiario(this.cedula, this.token).subscribe((response:HttpResponse<any>) => {
        if (response.body && response.body.length > 0) {
          console.log(response.body);
          this.contribuciones = response.body;
        }
      }, (error) => {
        this.showToast(error);
      });
    }else{
      let mensaje = "Valor Incorrecto";
      this.showToast(mensaje);
    }
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

  private CheckExpiration(expiracion:Date){
    let hoy = new Date();
    if(expiracion < hoy){
      let mensaje = 'Sesión Expirada';
      this.showToast(mensaje, true);
    } else {
      this.LlenaDatos();
    }
  }

  public Logout(){
    this._auth.UserLogout().then(() => {
      let mensaje = '¡Adiós!';
      this.showToast(mensaje, true);
    }).catch((error) => {
      this.showToast(error);
    });
  }

  private Redirect(){
    this._router.navigateByUrl('/login');
  }

  async showToast(message:string, redirect:boolean=false){
    const toast = await this.toastCtrl.create({
      message: message,
      position: 'middle',
      duration: 2000,
    });

    if (redirect) {
      toast.onDidDismiss().then(() => {
        this.Redirect();
      });
    }
    

    toast.present();
  }

}
