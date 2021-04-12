import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public AppName:string = environment.appName;
  public plataforma:string = 'desktop';
  
  constructor(private platform:Platform) {
  	if(this.platform.is('android')){
  		this.plataforma = 'android';
  	}
  }

}
