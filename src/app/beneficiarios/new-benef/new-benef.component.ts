import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { AlertController, ToastController, Platform } from '@ionic/angular';
import { Beneficiario } from '../../interfaces/beneficiario';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';
import { Utilities } from '../../clases/utilities';


@Component({
  selector: 'app-new-benef',
  templateUrl: './new-benef.component.html',
  styleUrls: ['./new-benef.component.scss'],
})
export class NewBenefComponent implements OnInit {

  @ViewChild('txtCedula') cedulaField:any;
  @ViewChild('datFechaNac') fechaField:any;
  @ViewChild('txtPrimerNombre') nombreField:any;
  @ViewChild('txtPrimerApellido') apellidoField:any;
  @ViewChild('optSexo') sexField:any;
  @ViewChild('optEtnia') etniaField:any;


	public beneficiario:Beneficiario;
	public backroute:string = '/beneficiarios';
	public etnias:any;
  public keyEtnias:string[];
  public hoy:string;
  

  constructor(
  	private _auth:AuthService,
    private _data:DataService,
  	private alertCtrl:AlertController,
  	private toastCtrl:ToastController,
  	private _router:Router,
  	private _activatedRoute:ActivatedRoute,
  	private platform:Platform) { 
    this.hoy = new Date().toISOString();
  }

  ngOnInit() {
  	this.LlenaDatos();
  }


  private LlenaDatos(){

    if(this._activatedRoute.snapshot.paramMap.has('ref')){
      this.backroute = '/inicio/nuevo/ref';
    }

    this.etnias = this._data.Etnias;
    this.keyEtnias = Object.keys(this.etnias);

    this.beneficiario = {
      cedula: null,
      primer_nombre: null,
      segundo_nombre: null,
      primer_apellido: null,
      segundo_apellido: null,
      fecha_nac: null,
      sexo: null,
      etnia: null,
      direccion: null,
      contribuciones: null,
    };

    this._auth.updateSession().then(() => {});

  }


  async showToast(message:string, redirect:boolean=false, route?:string){

    const toast = await this.toastCtrl.create({
      message: message,
      position: 'middle',
      duration: 2000,
    });

    if (redirect) {
      toast.onDidDismiss().then(() => {
        
        if(route){
          this._router.navigateByUrl(route);
        }
        
      });
    }

    toast.present();

  }

  async showAlert(){

    if (this.Validar()) {
      const alert = await this.alertCtrl.create({
        message: 'Se guardará el registro en la BD. ¿Desea Continuar?',
        header: 'Confirmar Guardar',
        buttons: [
          {
            text: 'Si',
            handler: () => {
              this.Guardar();
            }
          },
          {
            text: 'No',
            role: 'cancel'
          }
        ],
      });

      await alert.present();
    } else {
      this.showToast('Datos No Válidos');
    }
  	
  }

  Guardar(){

    this.beneficiario.fecha_nac = Utilities.DateFormat(this.beneficiario.fecha_nac);

    this.beneficiario.cedula = this.beneficiario.cedula.toUpperCase();

    this._auth.getAuthToken().then((token) => {

      if (!(this.platform.is('desktop') || this.platform.is('mobileweb'))) {
        
        this._data.newBeneficiarioNative(this.beneficiario, token.value).then((data) => {
          
          if (data.status == 200) {

            this.showToast('Registro Guardado', true, this.backroute);

          }

        }).catch((error) => {

          console.error("Error: ".concat(error.error));
          this.showToast(error.error);
          
        });

      } else {

        this._data.newBeneficiario(this.beneficiario, token.value).subscribe((response:HttpResponse<any>) => {
          
          if (response.ok) {

            this.showToast('Registro Guardado', true, this.backroute);

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

  private Validar():boolean{

    let valido = false;

    if (this.cedulaField.valid && this.fechaField.valid && this.nombreField.valid && this.apellidoField.valid && this.sexField.valid && this.etniaField.valid) {
      valido = true;
    }

    return valido;

  }

}
