import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { AlertController, ToastController } from '@ionic/angular';
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
  private token:string;
  public hoy:string;

  constructor(
  	private _auth:AuthService,
    private _data:DataService,
  	private alertCtrl:AlertController,
  	private toastCtrl:ToastController,
  	private _router:Router,
  	private _activatedRoute:ActivatedRoute,
  	) { 
    this.hoy = new Date().toISOString();
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

  private CheckExpiration(expiracion:Date){

    let hoy = new Date();

    if(expiracion < hoy){
      let mensaje = 'Sesión Expirada';
      this.showToast(mensaje, true);
    } else {
      this.LlenaDatos();
    }

  }

  private LlenaDatos(){

    if(this._activatedRoute.snapshot.paramMap.get('ref') != null){
      this.backroute = '/inicio/nuevo';
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


  async showToast(message:string, redirect:boolean=false){

    const toast = await this.toastCtrl.create({
      message: message,
      position: 'middle',
      duration: 2000,
    });

    if (redirect) {
      toast.onDidDismiss().then(() => {
        this._router.navigateByUrl('/login');
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

    this._data.newBeneficiario(this.beneficiario, this.token).subscribe((response:HttpResponse<any>) => {
      
      if (response.ok) {
        this.toastCtrl.create({
          message: 'Registro Guardado',
          position: 'bottom',
          duration: 2000,
        }).then((toast) => {
          toast.onDidDismiss().then(() => {
            this._router.navigateByUrl(this.backroute);
          });

          toast.present();
        }); 
      }

    }, (error) => {
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
