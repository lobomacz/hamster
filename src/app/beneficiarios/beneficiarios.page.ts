import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { ToastController, Platform } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';
import { Beneficiario } from '../interfaces/beneficiario';
import { Utilities } from '../clases/utilities';


@Component({
  selector: 'app-beneficiarios',
  templateUrl: './beneficiarios.page.html',
  styleUrls: ['./beneficiarios.page.scss'],
})
export class BeneficiariosPage implements OnInit {

	public beneficiarios:Beneficiario[];

  constructor(
    private _auth:AuthService,
    private _data:DataService, 
    private _router:Router,
    private toastCtrl:ToastController,
    private platform:Platform) { }

  ngOnInit() {
  	
    this.LlenaDatos();

  }

  ionViewDidEnter(){
    this.refresh(false);
  }

  refresh(ev) {
    this.LlenaDatos(true, ev);
  }


  private LlenaDatos(refresh:boolean=false, event?:any){

    this._auth.updateSession().then(() => {});

    this._auth.getAuthToken().then((token) => {

      if (!(this.platform.is('desktop') || this.platform.is('mobileweb'))) {
        
        this._data.getBeneficiariosNative(token.value).then((data) => {

          if(data.data){
            this.beneficiarios = JSON.parse(data.data);

            if (refresh) {
              event.detail.complete();
            }
          }

        }).catch((error) => {
          console.error("Error: ".concat(error.error));
          this.showToast(error.error);
        });

      } else {

        this._data.getBeneficiarios(token.value).subscribe((response:HttpResponse<any>) => {
          
          this.beneficiarios = response.body;

          if (refresh) {
            event.detail.complete();
          }

        }, (error) => {
          console.error("Error: ".concat(error));
          this.showToast(error);
        });

      }

    }).catch((error) => {
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
        this._router.navigateByUrl('/hamster');
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
