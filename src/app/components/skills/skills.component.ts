import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';



@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  public skillsList: any;

  constructor(private datosPorfolio:PorfolioService) { }

  public ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      this.skillsList=data//.skills;
    });
  }

}
