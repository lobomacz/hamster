import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams, HttpEvent, HttpErrorResponse } from '@angular/common/http';
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
  private authToken:string;

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

  constructor(private _http:HttpClient) { 
    this.getAuthToken();
  }

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

  async getAuthToken(){
    const token = await Storage.get({key: 'authToken'})
    this.authToken = token.value;
  }

  public getContribuciones(authToken:string):Observable<any>{

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

    return this._http.get<Contribucion>(url, options).pipe(catchError(this.handleError));

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

}
