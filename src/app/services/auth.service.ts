import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams, HttpClient, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Plugins } from '@capacitor/core';
import { environment } from '../../environments/environment';
import { Usuario } from '../interfaces/usuario';
import { ILoginData } from '../interfaces/i-login-data';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
const { Storage } = Plugins;


@Injectable({
  providedIn: 'root'
})
export class AuthService {

	private ApiUrl:string = environment.appUrl;
  private sessionAge:number = environment.sessionAge;
  private usuario:Usuario;
  
  public get Usuario() : Usuario {
    return this.usuario;
  }


  constructor(private _http:HttpClient) { }

  private handleError(error: HttpErrorResponse){
    let errorMessage:string = 'Ocurrió un error desconocido.';
    console.log(error);
    let status = error.status;
    
    if(status == 400 || status == 401 || status == 403){
      errorMessage = 'Acceso Denegado';
    } else {
      if (error.error instanceof ErrorEvent) {
        console.error('Error: ', error.message);
        errorMessage = 'Error en el agente del usuario.';
      }else{
        console.error(
          `El backend reportó un error código ${error.status}, `+
          `error: ${error.error}.`);
      }
    }

    return throwError(errorMessage);
  }

  async setAuthToken(username:string, password:string){
    const authorization_data = btoa(username.concat(':', password));
    await Storage.set({
      key: 'authtoken',
      value: authorization_data
    });
  }

  async setSession(usuario:Usuario){
    if (usuario.id != null) {
      this.usuario = usuario;
      let now:number = new Date().getTime();
      let age:number = now + this.sessionAge;
      await Storage.set({
        key: 'session-age',
        value: age.toString()
      });
    }
    
  }

  async updateSession(){
    let now = new Date().getTime();

    let age = now + this.sessionAge;
    await Storage.set({
      key:'session-age',
      value: age.toString()
    });
  }

  public getAuthToken(){
    return Storage.get({key: 'authtoken'});
  }

  public getSession(){
    return Storage.get({key:'session-age'});
  }

  public Autenticar(datos:ILoginData):Observable<any>{
    
    let url = this.ApiUrl.concat('/auth/');
    let authorization_data = btoa(datos.username.concat(':', datos.password));

    let headers:HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic '.concat(authorization_data)
    });

    let options = {
      'headers': headers,
      observe: 'response' as const,
      responseType: 'json' as const,
    };

    return this._http.post(url, datos, options).pipe(catchError(this.handleError));

  }


  public UserLogout(){
    return Storage.clear();
  }

}
