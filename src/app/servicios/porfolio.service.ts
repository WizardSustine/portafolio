import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';


@Injectable({
  providedIn: 'root'
})
export class PorfolioService {

  url:string="https://ascendant-timer-370220.rj.r.appspot.com/persona/";

  constructor(private http:HttpClient) { }

  public obtenerDatos():Observable<persona>{
    return this.http.get<persona>(this.url+'traer/perfil');
  };

  public update(id: number, per:persona): Observable<any>{
    return this.http.put<any>(this.url + `editar/${id}?nombre=${per.nombre}&apellido=${per.apellido}&img=${per.img}&position=${per.position}&company=${per.company}&ubicacion=${per.ubicacion}&about=${per.about}`, '');
  }

}
