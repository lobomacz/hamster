import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { AlertController, ToastController } from '@ionic/angular';
import { environment } from '../../../environments/environment';
import { Contribucion } from '../../interfaces/contribucion';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';
import { Utilities } from '../../clases/utilities';


@Component({
  selector: 'app-nueva-contribucion',
  templateUrl: './nueva-contribucion.component.html',
  styleUrls: ['./nueva-contribucion.component.scss'],
})
export class NuevaContribucionComponent implements OnInit {

  @ViewChild('dtFecha') dateField:any;
  @ViewChild('optBeneficiario') benefField:any;
  @ViewChild('optTipoAporte') tipoField:any;
  @ViewChild('txtMonto') montoField:any;
  @ViewChild('txtConcepto') conecptoField:any;
  @ViewChild('optFuncionario') funcionarioField:any;


	public AppName:string = environment.appName;
  private token:string;
	public contribucion:Contribucion;
	public hoy:string;
	private digitador:number = 255;

	public beneficiarios:any[];
	public tipos:any;
  public keyTipo:string[];
	public instituciones:any[];
	public funcionarios:any[];

  public meses:string[] = [
    'Ene', 'Feb','Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic', 
  ];
  public dias:string[] = [
    'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 
  ];

  constructor(
    private _auth:AuthService,
    private _data:DataService,
  	private _router:Router, 
  	private _toastCtrl:ToastController, 
  	private _alertCtrl:AlertController) { 
  }

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

    this.hoy = new Date().toISOString();

    this.contribucion = {
      id: null,
      fecha: this.hoy,
      beneficiario: null,
      tipo: null,
      monto: null,
      concepto: null,
      funcionario: null,
      digitador: null,
      creado: this.hoy
    };

    this._auth.updateSession().then(() => {});

    this.tipos = this._data.Tipos;
    this.keyTipo = Object.keys(this.tipos);

    this._data.getBeneficiarios(this.token).subscribe((response:HttpResponse<any>) => {
      this.beneficiarios = response.body;
    }, (error) => {
      this.showToast(error);
    });

    this._data.getInstituciones(this.token).subscribe((response:HttpResponse<any>) => {
      this.instituciones = response.body;
    }, (error) => {
      this.showToast(error);
    });

    this._data.getFuncionarios(this.token).subscribe((response:HttpResponse<any>) => {
      this.funcionarios = response.body;
    }, (error) => {
      this.showToast(error);
    });
  }

  async showToast(mensaje:string, redirect:boolean=false){

    const toast = await this._toastCtrl.create({
      message:mensaje,
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

  async showAlert(){

    if (this.Validar()) {

      const alert = await this._alertCtrl.create({
        header: 'Confirma Guardar',
        message: 'Verifique que los datos son correctos. ¿Desea continuar?',
        buttons: [
          {
            text: 'Si',
            handler: () => {
              this.Guardar();
            }
          },
          {
            text: 'No',
            role: 'cancel',
          }
        ],
      });

      await alert.present();

    } else {
      this.showToast('Datos No Válidos');
    }
  	
  }

  Guardar(){

    this.contribucion.fecha = Utilities.DateFormat(this.contribucion.fecha);

    this._data.newContribucion(this.contribucion, this.token).subscribe((response:HttpResponse<any>) => {
      this._toastCtrl.create({
        message: 'Registro Guardado',
        position: 'bottom',
        duration: 2000,
      }).then((toast) => {
        toast.onDidDismiss().then(() => {
          this.gotoList();
        });
        toast.present()
      });
      
    }, (error) => {
      this.showToast(error);
    });

  }

  gotoList(){
  	this._router.navigateByUrl('/inicio');
  }

  Validar():boolean{
    let valido = false;

    if (this.dateField.valid && this.benefField.valid && this.tipoField.valid && this.montoField.valid && this.conecptoField.valid && this.funcionarioField.valid) {
      valido = true;
    }

    return valido;
  }

}
