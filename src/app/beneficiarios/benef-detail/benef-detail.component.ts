import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';
import { Beneficiario } from '../../interfaces/beneficiario';
import { Utilities } from '../../clases/utilities';


@Component({
  selector: 'app-benef-detail',
  templateUrl: './benef-detail.component.html',
  styleUrls: ['./benef-detail.component.scss'],
})
export class BenefDetailComponent implements OnInit {

	public beneficiario:Beneficiario;
	public edad:number;
	public nombreCompleto:string = 'N/A';
	public color:string;
	public etnias:any;

  private token:string;

  constructor(
    private _auth:AuthService,
    private _router:Router,
  	private _activatedRoute:ActivatedRoute, 
  	private _data:DataService, 
    private toastCtrl:ToastController
  	) { }

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
    let id:string = this._activatedRoute.snapshot.paramMap.get('id');
    this.etnias = this._data.Etnias;

    this._data.getBeneficiarioById(id, this.token).subscribe((response:HttpResponse<any>) => {
      this.beneficiario = {...response.body};
      let nombres = [this.beneficiario.primer_nombre, this.beneficiario.segundo_nombre, this.beneficiario.primer_apellido, this.beneficiario.segundo_apellido];
      this.nombreCompleto = Utilities.FullName(nombres);
      this.edad = Utilities.CalculaEdad(this.beneficiario.fecha_nac);
      this.color = Utilities.BadgeColor(this.beneficiario.contribuciones.length);
      this._auth.updateSession().then(() => {});
    }, (error) => {
      this.showToast(error);
    });

  }

  private getNombreCompleto(){
    this.nombreCompleto = this.beneficiario.primer_nombre;
    this.nombreCompleto = this.beneficiario.segundo_nombre == null ? this.nombreCompleto:this.nombreCompleto.concat(' ', this.beneficiario.segundo_nombre);
    this.nombreCompleto = this.nombreCompleto.concat(' ', this.beneficiario.primer_apellido, ' ', this.beneficiario.segundo_apellido?this.beneficiario.segundo_apellido:'').trim();
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


}
