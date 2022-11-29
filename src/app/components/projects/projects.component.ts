import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { ProyectosServiceService } from 'src/app/servicios/proyectos-service.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  proye: Proyectos[] = [];

  constructor(private ProyectosS: ProyectosServiceService, private tokenService: TokenService) { }

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
    this.ProyectosS.lista().subscribe(data => { this.proye = data; })
  }

  delete(id?: number){
    if(id != undefined){
      this.ProyectosS.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }

}
