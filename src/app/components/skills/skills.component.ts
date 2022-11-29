import { Component, OnInit } from '@angular/core';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesServiceService } from 'src/app/servicios/habilidades-service.service';
import { TokenService } from 'src/app/servicios/token.service';



@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  habi: Habilidades[] = [];

  constructor(private HabilidadesS: HabilidadesServiceService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void {
    this.HabilidadesS.lista().subscribe(data => { this.habi = data; })
  }

  delete(id?: number){
    if(id != undefined){
      this.HabilidadesS.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }

}
