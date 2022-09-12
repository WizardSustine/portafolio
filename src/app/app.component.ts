import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portafolio';
  private btn: any;

  ngOnInit(): void {
    this.btn = document.getElementsByClassName("btn-edit");
    for(var i = 0; i<this.btn.length; i++){
    this.btn[i].style = "display: none";}
  }
}

/*export class Persona{
  private nombre:string;
  private apellido:string;

  public constructor(name: string, lastname:string) {
    this.nombre=name;
    this.apellido=lastname;
  }
}*/