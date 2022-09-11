import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-socialinks',
  templateUrl: './socialinks.component.html',
  styleUrls: ['./socialinks.component.css']
})
export class SocialinksComponent implements OnInit {

  miPortfolio:any;

  constructor(private datosPortfolio:PorfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.miPortfolio=data;
    });
  }

}
