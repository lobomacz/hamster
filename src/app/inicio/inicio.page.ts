import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { ToastController, Platform } from '@ionic/angular';
import { Contribucion } from '../interfaces/contribucion';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';
import { Utilities } from '../clases/utilities';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  @ViewChild('searchField') cedulaField:any;
  public contribuciones:Contribucion[];
  public cedula:string;
  public token:string;
  private filtrar:boolean;
  

  constructor(
    private _data:DataService, 
    private _auth:AuthService,
    private _router:Router,
    private toastCtrl:ToastController,
    private platform:Platform,
    ) { }


  ngOnInit() {
    
    this.filtrar = false;
    this.LlenaDatos();

  }


  ionViewDidEnter(){
    this.filtrar = false;
    this.cedula = null;
    this.refresh(false);
  }


  refresh(ev){
    
    this.LlenaDatos(true, ev);
    
  }

  LlenaDatos(refresh:boolean=false, event?:any){

    // 'desktop' o 'mobileweb' para plataformas web
    // de lo contrario, se trata de plataforma híbrida android.

    this._auth.getAuthToken().then((token) => {

      this.token = token.value;

      if (!(this.platform.is('desktop') || this.platform.is('mobileweb'))) {

        if (this.filtrar) {
          
          this._data.getContribPorBenefNative(this.cedula.toUpperCase(), this.token).then((data) => {
            
            let contribuciones = JSON.parse(data.data);

            this.FillIfExists(contribuciones);

            this._auth.updateSession().then(() => {});

            if (refresh == true) {
              event.detail.complete();
            }

          }).catch((error) => {

            console.error("Error: ".concat(error.error));
            this.showToast(error.error);

          });

        } else {

          this._data.getContribucionesNative(this.token).then((data) => {

            this.contribuciones = JSON.parse(data.data);

            this._auth.updateSession().then(() => {});

            if (refresh == true) {
              event.detail.complete();
            }

          }).catch((error) => {

            console.error("Error: ".concat(error.error));
            this.showToast(error.error);

          });

        }

      } else {

        if (this.filtrar) {

          this._data.getContribucionesPorBeneficiario(this.cedula.toUpperCase(), this.token).subscribe((response:HttpResponse<any>) => {
            if (response.body && (response.body.length > 0)) {

              let contribuciones = response.body;

              this.FillIfExists(contribuciones);

              this._auth.updateSession().then(() => {});

              if (refresh == true) {
                event.detail.complete();
              }

            }
          }, (error) => {

            console.error("Error: ".concat(error));
            this.showToast(error);

          });

        } else {

          this._data.getContribuciones(this.token).subscribe((response:HttpResponse<any>) => {
            
            this.contribuciones = response.body;

            this._auth.updateSession().then(() => {});

            if (refresh == true) {
              event.detail.complete();
            }

          }, (error) => {

            console.error("Error: ".concat(error));
            this.showToast(error, false);

          });

        }

      }

    }).catch((error) => {
      this.showToast(error, false);
    });

  	
  }


  ContribucionesPorBeneficiario(){
    
    if (this.cedulaField.valid) {

      this.filtrar = true;

      this.LlenaDatos();
      
    }else{
      let mensaje = "Valor Incorrecto";
      this.showToast(mensaje);
    }
  }


  private FillIfExists(contribuciones:any[]){
    if (contribuciones && contribuciones.length > 0) {
      this.contribuciones = contribuciones;
    } else {
      let mensaje = "No hay contribuciones para el beneficiario.";
      this.showToast(mensaje);
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

  async showToast(message:string, redirect:boolean=false){
    const toast = await this.toastCtrl.create({
      message: message,
      position: 'middle',
      duration: 2000,
    });

    if (redirect) {
      toast.onDidDismiss().then(() => {
        this._router.navigateByUrl('/hamster');
      });
    }
    
    toast.present();
  }

}
