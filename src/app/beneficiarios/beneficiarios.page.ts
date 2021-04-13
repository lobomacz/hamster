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
  private token:string;

  constructor(
    private _auth:AuthService,
    private _data:DataService, 
    private _router:Router,
    private toastCtrl:ToastController,
    private platform:Platform) { }

  ngOnInit() {
  	
    this._auth.getAuthToken().then((token) => {
      this.token = token.value;
      this.LlenaDatos();
    }).catch((error) => {
      this.showToast(error);
    });

  }

  ionViewDidEnter(){
    this.refresh(null);
  }

  refresh(ev) {
    this._auth.getAuthToken().then((token) => {
      this.token = token.value;
      if (!(this.platform.is('desktop') || this.platform.is('mobileweb'))){
        this._data.getBenefCountNative(this.token).then((response) => {
          this.CountList(response, ev);
        }).catch((response) => {
          this.showToast(response.error);
        });
      } else {
        this._data.getBenefCount(this.token).subscribe((response:HttpResponse<any>) => {
          this.CountList(response, ev);
        }, (error) => {
          console.error("Error: ".concat(error));
          this.showToast(error);
        });
      }
      
    }).catch((error) => {
      this.showToast(error);
    });
    
  }


  CountList(data:any, ev:any){

    let count = 0;

    if (data.data) {
      count = JSON.parse(data.data).count;
    } else if (data.body){
      count = JSON.parse(data.body).count;
    }

    if ((this.beneficiarios != null && this.beneficiarios.length > 0) && count > this.beneficiarios.length) {
      
      this.LlenaDatos();

    }

    if (ev != null) {
      ev.detail.complete();
    } 
    
  }


  LlenaDatos(){

    this._auth.updateSession().then(() => {});

    if (!(this.platform.is('desktop') || this.platform.is('mobileweb'))) {
      
      this._data.getBeneficiariosNative(this.token).then((data) => {

        if(data.data){

          this.beneficiarios = JSON.parse(data.data);

        }

      }).catch((error) => {
        console.error("Error: ".concat(error.error));
        this.showToast(error.error);
      });

    } else {

      this._data.getBeneficiarios(this.token).subscribe((response:HttpResponse<any>) => {
        
        this.beneficiarios = response.body;

      }, (error) => {
        console.error("Error: ".concat(error));
        this.showToast(error);
      });

    }
    
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
