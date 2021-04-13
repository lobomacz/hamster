import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastController, Platform } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { environment } from '../../environments/environment';
import { Usuario } from '../interfaces/usuario';
import { ILoginData } from '../interfaces/i-login-data';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

	@ViewChild('usuario') emailField:any;
	@ViewChild('clave') passwordField:any;

	public AppName:string = environment.appName;
	public nombreusuario:string;
	public contrasena:string;
  public plataforma:string = 'login-card__desktop';

  private ApiUrl:string = environment.appUrl;
  

  constructor(
    private _auth:AuthService, 
    private _router:Router,
    private toastCtrl:ToastController, 
    private platform:Platform,
    ) { 
  }

  ngOnInit() {
    
    if (!this.platform.is('desktop')) {
      this.plataforma = 'login-card__mobile';
    }

  }

  userLogin(){

  	if (this.emailField.valid && this.passwordField.valid) {

      let loginData:ILoginData = {username: this.nombreusuario, password: this.contrasena}

      if (!(this.platform.is('desktop') || this.platform.is('mobileweb'))) {
        
        this._auth.AutenticarNative(loginData).then((data:any) => {

          let usuario:Usuario = <Usuario>{...JSON.parse(data.data)};

          if(typeof(usuario) == 'undefined' || usuario.id == null){
            this.showToast('Acceso Denegado');
            return;
          }

          usuario.password = loginData.password;

          this._auth.setAuthToken(this.nombreusuario, this.contrasena).then(() => {
            this._auth.setSession(usuario).then(() => {
              let mensaje = "¡HOLA, ".concat(usuario.first_name, ' ', usuario.last_name, '!').toUpperCase();
              this.showToast(mensaje, true);
            });
          });

        }).catch((error) => {
          console.error("Error: ".concat(error.error));
          this.showToast(error.error);
        });

      } else {

        let validated = this._auth.Autenticar(loginData);

        validated.subscribe((response:HttpResponse<any>) => {

          let usuario:Usuario = {...response.body};

          if(typeof(usuario) == 'undefined' || usuario.id == null){
            this.showToast('Acceso Denegado');
            return;
          }

          usuario.password = loginData.password;

          this._auth.setAuthToken(this.nombreusuario, this.contrasena).then(() => {
            this._auth.setSession(usuario).then(() => {
              let mensaje = "¡HOLA, ".concat(usuario.first_name, ' ', usuario.last_name, '!').toUpperCase();
              this.showToast(mensaje, true);
            });
          });
          
        }, (error) => {
          console.error("Error: ".concat(error));
          this.showToast(error);
        });

      }

  	} else {
      this.showToast('Datos No Válidos');
    }
  }

  async showToast(mensaje:string, redirect:boolean=false){
    const toast = await this.toastCtrl.create({
      message: mensaje,
      position: 'middle',
      duration: 2000
    });

    if (redirect) {
      toast.onDidDismiss().then(() => {
        if (this._auth.redirectUrl) {
          this._router.navigateByUrl(this._auth.redirectUrl);
        } else {
          this._router.navigateByUrl('/inicio');
        }
      });
    }

    toast.present();
  }

}
