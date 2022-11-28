import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';


@Injectable({
  providedIn: 'root'
})
export class PorfolioService {

  url:string="http://localhost:8080/persona/";

  constructor(private http:HttpClient) { }

  public obtenerDatos():Observable<persona>{
    return this.http.get<persona>(this.url+'traer/perfil');
  };

}
