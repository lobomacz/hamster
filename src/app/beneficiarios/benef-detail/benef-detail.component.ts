import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { ToastController, Platform } from '@ionic/angular';
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

  constructor(
    private _auth:AuthService,
    private _router:Router,
  	private _activatedRoute:ActivatedRoute, 
  	private _data:DataService, 
    private toastCtrl:ToastController,
  	private platform:Platform) { }

  ngOnInit() {
  	
    this.LlenaDatos();
  	
  }


  private LlenaDatos(){

    let id:string = this._activatedRoute.snapshot.paramMap.get('id');

    this.etnias = this._data.Etnias;

    this._auth.updateSession().then(() => {});

    this._auth.getAuthToken().then((token) => {

      if (!(this.platform.is('desktop') || this.platform.is('mobileweb'))) {
        
        this._data.getBeneficiarioByIdNative(id, token.value).then((data) => {
          if(data.data){
            this.beneficiario = <Beneficiario>{...JSON.parse(data.data)};
            this.Complementos();
          }
        }).catch((error) => {
          console.error("Error: ".concat(error.error));
          this.showToast(error.error);
        });
        
      } else {

        this._data.getBeneficiarioById(id, token.value).subscribe((response:HttpResponse<any>) => {
          this.beneficiario = {...response.body};
          this.Complementos();
        }, (error) => {
          console.error("Error: ".concat(error));
          this.showToast(error);
        });

      }

    }).catch((error) => {
      this.showToast(error);
    });


  }

  private Complementos(){
    let nombres = [this.beneficiario.primer_nombre, this.beneficiario.segundo_nombre, this.beneficiario.primer_apellido, this.beneficiario.segundo_apellido];
    this.nombreCompleto = Utilities.FullName(nombres);
    this.edad = Utilities.CalculaEdad(this.beneficiario.fecha_nac);
    this.color = Utilities.BadgeColor(this.beneficiario.contribuciones.length);
    this._auth.updateSession().then(() => {});
  }


  async showToast(message:string){
    const toast = await this.toastCtrl.create({
      message: message,
      position: 'middle',
      duration: 2000,
    });
    
    toast.present();
  }


}
