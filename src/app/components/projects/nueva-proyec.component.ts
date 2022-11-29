import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosServiceService } from 'src/app/servicios/proyectos-service.service';

@Component({
  selector: 'app-nueva-proyec',
  templateUrl: './nueva-proyec.component.html',
  styleUrls: ['./nueva-proyec.component.css']
})
export class NuevaProyecComponent implements OnInit {
  name: string = '';
  img: string = '';
  link: string = '';
  description: string = '';

  constructor(private ProyeServ:ProyectosServiceService, private router:Router) { }
  
  ngOnInit(): void {
  }

  onCreatePr():void{
    const proye = new Proyectos(this.name, this.img, this.link, this.description);
    this.ProyeServ.save(proye).subscribe(
      data => {
        alert("Proyecto añadido");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }
}
