import { Component, OnInit, Output } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';



@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  public skillsList: any;
  public scrollProgress: any;

  constructor(private datosPorfolio:PorfolioService) { }

  public ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      this.skillsList=data.skills;
    });
  }

  trackEmployee(index: any,information: { id: any; }){
    return information ? information.id : undefined;
  }
  
  setstyle(id:string, progress:number){
    this.scrollProgress = document.getElementById(id);
    this.scrollProgress.style.background = `conic-gradient(#008fff ${progress}%, #f2f2f4 ${progress}%)`;
  }

}
