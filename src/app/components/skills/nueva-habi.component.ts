import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesServiceService } from 'src/app/servicios/habilidades-service.service';

@Component({
  selector: 'app-nueva-habi',
  templateUrl: './nueva-habi.component.html',
  styleUrls: ['./nueva-habi.component.css']
})
export class NuevaHabiComponent implements OnInit {
  name: string = '';
  img: string = '';
  porcentaje: number = 0;

  constructor(private HabiServ:HabilidadesServiceService, private router:Router) { }
  
  ngOnInit(): void {
  }

  onCreateHa():void{
    const habi = new Habilidades(this.name, this.img, this.porcentaje);
    this.HabiServ.save(habi).subscribe(
      data => {
        alert("Habilidad añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}
