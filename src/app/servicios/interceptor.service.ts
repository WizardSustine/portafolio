import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AutenticationServiceService } from './autentication-service.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private autenticationServicio: AutenticationServiceService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    /*throw new Error('Method not implemented.');*/

    var currentUser=this.autenticationServicio.UsuarioAutenticado;

    if(currentUser && currentUser.accessToken)
    {
      req=req.clone({
        setHeaders:{
          Authorization: 'Bearer $(currentUser.accessToken)'
        }
      })
    }

    console.log("Interceptor está corriendo " + JSON.stringify(currentUser));

    return next.handle(req);
  }
}
