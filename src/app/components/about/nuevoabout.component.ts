import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-nuevoabout',
  templateUrl: './nuevoabout.component.html',
  styleUrls: ['./nuevoabout.component.css']
})
export class NuevoaboutComponent implements OnInit {
  pers: persona = null;


  constructor(private datosPortfolio:PorfolioService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(
      data =>{
        this.pers = data;
      }, err =>{
        alert("Error al modificar educación");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = 1;
    this.datosPortfolio.update(id, this.pers).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar acerca de");
         this.router.navigate(['']);
      }
    )
  }
}
