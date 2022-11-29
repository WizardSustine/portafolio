import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosServiceService } from 'src/app/servicios/proyectos-service.service';

@Component({
  selector: 'app-edit-proyec',
  templateUrl: './edit-proyec.component.html',
  styleUrls: ['./edit-proyec.component.css']
})
export class EditProyecComponent implements OnInit {
  proyes: Proyectos = null;

  constructor(private ProyectosS: ProyectosServiceService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.ProyectosS.detail(id).subscribe(
      data =>{
        this.proyes = data;
      }, err =>{
        alert("Error al modificar proyecto");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.ProyectosS.update(id, this.proyes).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar proyecto");
         this.router.navigate(['']);
      }
    )
  }

}
