import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  persona:persona = new persona("", "", "", "", "", "", "");

  constructor(private datosPortfolio:PorfolioService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.persona = data;
    });
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
}
