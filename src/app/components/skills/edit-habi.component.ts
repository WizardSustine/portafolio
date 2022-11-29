import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesServiceService } from 'src/app/servicios/habilidades-service.service';

@Component({
  selector: 'app-edit-habi',
  templateUrl: './edit-habi.component.html',
  styleUrls: ['./edit-habi.component.css']
})
export class EditHabiComponent implements OnInit {
  habis: Habilidades = null;

  constructor(private HabilidadesS: HabilidadesServiceService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.HabilidadesS.detail(id).subscribe(
      data =>{
        this.habis = data;
      }, err =>{
        alert("Error al modificar habilidad");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.HabilidadesS.update(id, this.habis).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar habilidad");
         this.router.navigate(['']);
      }
    )
  }
}
