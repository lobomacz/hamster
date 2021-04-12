import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

	constructor(private _auth:AuthService, private _router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    
    let url = state.url;

    return this.checkSession(url);

  }

  canActivateChild(
  	route: ActivatedRouteSnapshot,
  	state: RouterStateSnapshot): boolean | UrlTree {

  	return this.canActivate(route, state);
  }

  checkSession(url:string){
  	if (this._auth.IsAuthenticated()) {
  		return true;
  	}

  	// Guarda la url para redirigir una vez que se valide.
  	this._auth.redirectUrl = url;

  	return this._router.parseUrl('/login');

  }
  
}
