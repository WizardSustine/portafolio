import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaServiceService } from 'src/app/servicios/experiencia-service.service';

@Component({
  selector: 'app-nueva-exp',
  templateUrl: './nueva-exp.component.html',
  styleUrls: ['./nueva-exp.component.css']
})
export class NuevaExpComponent implements OnInit {
  position: string = '';
  company: string = '';
  img: string = '';
  description: string = '';
  mode: string = '';
  start: string = '';
  end: string = '';
  timelapsed: string = '';
  city: string = '';

  constructor(private ExpServ:ExperienciaServiceService, private router:Router) { }
  
  ngOnInit(): void {
  }

  onCreateEx():void{
    const expe = new Experiencia(this.position, this.company, this.img, this.description, this.mode, this.start, this.end, this.timelapsed, this.city);
    this.ExpServ.save(expe).subscribe(
      data => {
        alert("Experiencia añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}
