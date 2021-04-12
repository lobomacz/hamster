import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { AlertController, ToastController, Platform } from '@ionic/angular';
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
	public contribucion:Contribucion;
	public hoy:string;
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

  private digitador:number = 255;


  constructor(
    private _auth:AuthService,
    private _data:DataService,
  	private _router:Router, 
    private _activatedRoute:ActivatedRoute,
  	private _toastCtrl:ToastController, 
  	private _alertCtrl:AlertController,
    private platform:Platform) { 
  }

  ngOnInit() {
    this.LlenaDatos();
  }

  ionViewDidEnter() {
    if (this._activatedRoute.snapshot.paramMap.has('ref')) {
      this._auth.getAuthToken().then((token) => {
        this.LlenaBeneficiarios(token.value);
      }).catch((error) => {
        this.showToast(error);
      });
      
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

    this._auth.getAuthToken().then((token) => {

      if (!(this.platform.is('desktop') || this.platform.is('mobileweb'))) {

        this._data.getInstitucionesNative(token.value).then((data) => {
          if (data.data) {
            this.instituciones = JSON.parse(data.data);
          }
        }).catch((error) => {
          console.error("Error: ".concat(error.error));
          this.showToast(error.error);
        });

        this._data.getFuncionariosNative(token.value).then((data) => {
          if (data.data) {
            this.funcionarios = JSON.parse(data.data);
          }
        }).catch((error) => {
          console.error("Error: ".concat(error.error));
          this.showToast(error.error);
        });

      } else {

        this._data.getInstituciones(token.value).subscribe((response:HttpResponse<any>) => {
          this.instituciones = response.body;
        }, (error) => {
          console.error("Error: ".concat(error));
          this.showToast(error);
        });

        this._data.getFuncionarios(token.value).subscribe((response:HttpResponse<any>) => {
          this.funcionarios = response.body;
        }, (error) => {
          console.error("Error: ".concat(error));
          this.showToast(error);
        });

      }

      this.LlenaBeneficiarios(token.value);

    }).catch((error) => {
      this.showToast(error);
    });


  }

  LlenaBeneficiarios(token:string){

    if (!(this.platform.is('desktop') || this.platform.is('mobileweb'))) {

      this._data.getBeneficiariosNative(token).then((data) => {
        if (data.data) {
          this.beneficiarios = JSON.parse(data.data);
        }
      }).catch((error) => {
        console.error("Error: ".concat(error.error));
        this.showToast(error.error);
      });

    } else {

      this._data.getBeneficiarios(token).subscribe((response:HttpResponse<any>) => {
        this.beneficiarios = response.body;
      }, (error) => {
        console.error("Error: ".concat(error));
        this.showToast(error);
      });

    }

  }

  async showToast(mensaje:string, redirect:boolean=false, route?:string){

    const toast = await this._toastCtrl.create({
      message:mensaje,
      duration: 2000,
      position: 'middle'
    });

    if (redirect == true) {
      toast.onDidDismiss().then(() => {
        if (route) {
          this._router.navigateByUrl(route);
        } 
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

    this._auth.getAuthToken().then((token) => {

      if (!(this.platform.is('desktop') || this.platform.is('mobileweb'))) {
        
        this._data.newContribucionNative(this.contribucion, token.value).then((data) => {

          if (data.status == 200) {
            
            this.showToast('Registro Guardado', true, '/inicio');

          }

        }).catch((error) => {

          console.error("Error: ".concat(error.error));
          this.showToast(error.error);

        });

      } else {

        this._data.newContribucion(this.contribucion, token.value).subscribe((response:HttpResponse<any>) => {
          
          if (response.ok) {
            
            this.showToast('Registro Guardado', true,'/inicio');

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


  Validar():boolean{
    let valido = false;

    if (this.dateField.valid && this.benefField.valid && this.tipoField.valid && this.montoField.valid && this.conecptoField.valid && this.funcionarioField.valid) {
      valido = true;
    }

    return valido;
  }

}
