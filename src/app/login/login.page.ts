import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
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
  private ApiUrl:string = environment.appUrl;
	public nombreusuario:string;
	public contrasena:string;
  

  constructor(
    private _auth:AuthService, 
    private _router:Router,
    private toastCtrl:ToastController
    ) { 
  }

  ngOnInit() {
    
  }

  userLogin(){
  	if (this.emailField.valid && this.passwordField.valid) {

      let loginData:ILoginData = {username: this.nombreusuario, password: this.contrasena}

      let validated = this._auth.Autenticar(loginData);

      validated.subscribe((response:HttpResponse<any>) => {
        let usuario:Usuario = {...response.body};
        usuario.password = loginData.password;
        this._auth.setAuthToken(this.nombreusuario, this.contrasena).then(() => {
          this._auth.setSession(usuario).then(() => {
            let mensaje = "¡HOLA, ".concat(usuario.first_name, ' ', usuario.last_name, '!').toUpperCase();
            this.welcomeToast(mensaje);
          });
        });
        
      }, (error) => {
        console.error("Error: ".concat(error));
        this.showToast(error);
      });

  	} else {
      this.showToast('Datos No Válidos');
    }
  }

  async showToast(mensaje:string){
    const toast = await this.toastCtrl.create({
      message: mensaje,
      position: 'middle',
      duration: 2000
    });

    toast.present();
  }

  async welcomeToast(mensaje:string){
    const toast = await this.toastCtrl.create({
      message: mensaje,
      position: 'middle',
      duration: 2000
    });

    toast.present();

    toast.onDidDismiss().then(() => {
      this._router.navigateByUrl('/inicio');
    });
  }

}
