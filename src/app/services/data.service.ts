import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { Plugins } from '@capacitor/core';
import { environment } from '../../environments/environment';
import { Contribucion } from '../interfaces/contribucion';
import { Beneficiario } from '../interfaces/beneficiario';
import { Funcionario } from '../interfaces/funcionario';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private ApiUrl:string = environment.appUrl;

  private tipos:any = {
    'M': { label:'Aporte en Efectivo', icon: 'cash-outline'},
    'Mx': { label:'Aporte en Medicinas', icon: 'medkit-outline'},
    'P': { label:'Aporte en Provisiones', icon: 'cart-outline'},
    'Ps': { label:'Aporte en Pasajes', icon: 'bus-outline'},
    'Mt': { label:'Aporte en Materiales de Construcción', icon: 'hammer-outline'},
    'A': { label:'Aporte en Artículos Escolares', icon: 'library-outline'},
    'O': { label: 'Otro', icon: 'flower-outline'},
  };


  private etnias:any = {
    'M': 'Mestizo',
    'C': 'Creole',
    'MK': 'Miskitu',
    'U': 'Ulwa',
    'R': 'Rama',
    'G': 'Garifuna'
  };

  public get Etnias() : string {
    return this.etnias;
  }

  public get Tipos() : string {
    return this.tipos;
  }

  constructor(
    private _http:HttpClient,
    private http:HTTP,
    ) { }

  private handleError(error: HttpErrorResponse){

    let errorMessage:string = 'Ocurrió un error desconocido.';

    let status:number = error.status;
    
    if(status == 401 || status == 403){
      errorMessage = 'Acceso Denegado';
    } else if(status == 400){
      errorMessage = 'Error de Datos';
    } else {
      if (error.error instanceof ErrorEvent) {
        console.error('Error: ', error.message);
        errorMessage = 'Error en el agente del usuario.';
      }else{
        console.error(
          `El backend reportó un error código ${error.status}, 
          error: ${error.error}.`);
      }
    }

    return throwError(errorMessage);
  }


  public getContribCount(authToken:string):Observable<HttpResponse<any>>{

    const url = this.ApiUrl.concat('/contribuciones/count/');

    let headers:HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic '.concat(authToken)
    });

    let options = {
      'headers':headers,
      observe: 'response' as const,
      responseType: 'json' as const,
    };

    return this._http.get(url, options).pipe(catchError(this.handleError));

  }


  public getContribCountNative(authToken:string):Promise<any>{

    const url = this.ApiUrl.concat('/contribuciones/count/');

    let headers:any = {
      'Content-Type': 'application/json',
      'Authorization': 'Basic '.concat(authToken)
    };

    return this.http.get(url, {}, headers);

  }


  public getContribuciones(authToken:string):Observable<HttpResponse<any>>{

    const url = this.ApiUrl.concat('/contribuciones/');

    let headers:HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic '.concat(authToken)
    });

    let options = {
      'headers':headers,
      observe: 'response' as const,
      responseType: 'json' as const,
    };

    return this._http.get(url, options).pipe(catchError(this.handleError));

  }

  public getContribucionesNative(authToken:string):Promise<any>{

    const url = this.ApiUrl.concat('/contribuciones/');

    let headers:any = {
      'Content-Type': 'application/json',
      'Authorization': 'Basic '.concat(authToken)
    };

    return this.http.get(url, {}, headers);

  }


  public getContribucionesPorBeneficiario(cedula:string, authToken:string):Observable<any>{

    const url = this.ApiUrl.concat('/contribuciones/', cedula, '/por_beneficiario/');

    let headers:HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic '.concat(authToken)
    });

    let options = {
      'headers':headers,
      observe: 'response' as const,
      responseType: 'json' as const,
    };

    return this._http.get<Contribucion>(url, options).pipe(catchError(this.handleError));

  }


  public getContribPorBenefNative(cedula:string, authToken:string):Promise<any>{

    const url = this.ApiUrl.concat('/contribuciones/', cedula, '/por_beneficiario/');

    let headers:any = {
      'Content-Type': 'application/json',
      'Authorization': 'Basic '.concat(authToken)
    };

    return this.http.get(url, {}, headers);

  }


  public getContribucionById(id:number, authToken:string):Observable<HttpResponse<any>>{

    let url = this.ApiUrl.concat('/contribuciones/', id.toString());

    let headers:HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic '.concat(authToken)
    });

    let options = {
      'headers':headers,
      observe: 'response' as const,
      responseType: 'json' as const,
    };

    return this._http.get<Contribucion>(url, options).pipe(catchError(this.handleError));

  }


  public getContribucionByIdNative(id:number, authToken:string):Promise<any>{

    let url = this.ApiUrl.concat('/contribuciones/', id.toString());

    let headers:any = {
      'Content-Type': 'application/json',
      'Authorization': 'Basic '.concat(authToken)
    };

    return this.http.get(url, {}, headers);

  }


  public newContribucion(contribucion:Contribucion, authToken:string):Observable<HttpResponse<any>>{
    
    const url = this.ApiUrl.concat('/contribuciones/');

    let headers:HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic '.concat(authToken)
    });

    let options = {
      'headers':headers,
      observe: 'response' as const,
      responseType: 'json' as const,
    };

    return this._http.post(url, contribucion, options).pipe(catchError(this.handleError));

  }


  public newContribucionNative(contribucion:Contribucion, authToken:string):Promise<any>{
    
    const url = this.ApiUrl.concat('/contribuciones/');

    let headers:any = {
      'Content-Type': 'application/json',
      'Authorization': 'Basic '.concat(authToken)
    };

    return this.http.post(url, contribucion, headers);

  }


  public getBenefCount(authToken:string): Observable<HttpResponse<any>> {

    const url = this.ApiUrl.concat('/beneficiarios/count/');

    let headers:HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic '.concat(authToken)
    });

    let options = {
      'headers':headers,
      observe: 'response' as const,
      responseType: 'json' as const,
    };

    return this._http.get(url, options).pipe(catchError(this.handleError));

  }


  public getBenefCountNative(authToken:string): Promise<any> {

    const url = this.ApiUrl.concat('/beneficiarios/count/');

    let headers:any = {
      'Content-Type': 'application/json',
      'Authorization': 'Basic '.concat(authToken)
    };

    return this.http.get(url, {}, headers);

  }


  public getBeneficiarios(authToken:string): Observable<HttpResponse<any>> {

    const url = this.ApiUrl.concat('/beneficiarios/');

    let headers:HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic '.concat(authToken)
    });

    let options = {
      'headers':headers,
      observe: 'response' as const,
      responseType: 'json' as const,
    };

    return this._http.get(url, options).pipe(catchError(this.handleError));

  }

  public getBeneficiariosNative(authToken:string): Promise<any> {

    const url = this.ApiUrl.concat('/beneficiarios/');

    let headers:any = {
      'Content-Type': 'application/json',
      'Authorization': 'Basic '.concat(authToken)
    };

    return this.http.get(url, {}, headers);

  }

  public getBeneficiarioById(id:string, authToken:string):Observable<HttpResponse<any>>{

    let url = this.ApiUrl.concat('/beneficiarios/', id);

    let headers:HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic '.concat(authToken)
    });

    let options = {
      'headers':headers,
      observe: 'response' as const,
      responseType: 'json' as const,
    };

    return this._http.get<Beneficiario>(url, options).pipe(catchError(this.handleError));

  }


  public getBeneficiarioByIdNative(id:string, authToken:string):Promise<any>{

    let url = this.ApiUrl.concat('/beneficiarios/', id);

    let headers:any = {
      'Content-Type': 'application/json',
      'Authorization': 'Basic '.concat(authToken)
    };

    return this.http.get(url, {}, headers);

  }


  public newBeneficiario(beneficiario:Beneficiario, authToken:string):Observable<HttpResponse<any>>{
    
    const url = this.ApiUrl.concat('/beneficiarios/');

    let headers:HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic '.concat(authToken)
    });

    let options = {
      'headers':headers,
      observe: 'response' as const,
      responseType: 'json' as const,
    };

    return this._http.post(url, beneficiario, options).pipe(catchError(this.handleError));
  }


  public newBeneficiarioNative(beneficiario:Beneficiario, authToken:string):Promise<any>{
    
    const url = this.ApiUrl.concat('/beneficiarios/');

    let headers:any = {
      'Content-Type': 'application/json',
      'Authorization': 'Basic '.concat(authToken)
    };

    return this.http.post(url, beneficiario, headers);
  }


  public getInstituciones(authToken:string):Observable<HttpResponse<any>> {

    const url = this.ApiUrl.concat('/instituciones/');

    let headers:HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic '.concat(authToken)
    });

    let options = {
      'headers':headers,
      observe: 'response' as const,
      responseType: 'json' as const,
    };

    return this._http.get(url, options).pipe(catchError(this.handleError));

  }


  public getInstitucionesNative(authToken:string):Promise<any> {

    const url = this.ApiUrl.concat('/instituciones/');

    let headers:any = {
      'Content-Type': 'application/json',
      'Authorization': 'Basic '.concat(authToken)
    };

    return this.http.get(url, {}, headers);

  }

  public getFuncionarios(authToken:string):Observable<HttpResponse<any>> {

    const url = this.ApiUrl.concat('/funcionarios/');

    let headers:HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic '.concat(authToken)
    });

    let options = {
      'headers':headers,
      observe: 'response' as const,
      responseType: 'json' as const,
    };

    return this._http.get(url, options).pipe(catchError(this.handleError));

  }


  public getFuncionariosNative(authToken:string):Promise<any> {

    const url = this.ApiUrl.concat('/funcionarios/');

    let headers:any = {
      'Content-Type': 'application/json',
      'Authorization': 'Basic '.concat(authToken)
    };

    return this.http.get(url, {}, headers);

  }


  public getFuncionarioById(id:number, authToken:string):Observable<HttpResponse<any>> {

    const url = this.ApiUrl.concat('/funcionarios/', id.toString(), '/');

    let headers:HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic '.concat(authToken)
    });

    let options = {
      'headers':headers,
      observe: 'response' as const,
      responseType: 'json' as const,
    };

    return this._http.get<Funcionario>(url, options).pipe(catchError(this.handleError));

  }


  public getFuncionarioByIdNative(id:number, authToken:string):Promise<any> {

    const url = this.ApiUrl.concat('/funcionarios/', id.toString(), '/');

    let headers:any = {
      'Content-Type': 'application/json',
      'Authorization': 'Basic '.concat(authToken)
    };

    return this.http.get(url, {}, headers);

  }

}
