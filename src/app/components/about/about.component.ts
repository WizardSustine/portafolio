import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  persona:persona = new persona("", "", "", "", "", "", "");

  constructor(private datosPortfolio:PorfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.persona = data;
    });
  }
}
