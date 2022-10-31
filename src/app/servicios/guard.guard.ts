import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticationServiceService } from './autentication-service.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  
  constructor(private autenticationServicio: AutenticationServiceService, private rutas:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let currentUser=this.autenticationServicio.UsuarioAutenticado;
    if(currentUser && currentUser.accessToken)
    {
      return true;
    }
    else
    {
      this.rutas.navigate(['/sesion']);
      return false;
    }
      
  }
  
}
