import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionServiceService } from 'src/app/servicios/educacion-service.service';

@Component({
  selector: 'app-nueva-edu',
  templateUrl: './nueva-edu.component.html',
  styleUrls: ['./nueva-edu.component.css']
})
export class NuevaEduComponent implements OnInit {
  career: string = '';
  school: string = '';
  degree: string = '';
  img: string = '';
  startt: string = '';
  endd: string = '';

  constructor(private EduServ:EducacionServiceService, private router:Router) { }
  
  ngOnInit(): void {
  }

  onCreateEd():void{
    const edu = new Educacion(this.career, this.school, this.degree, this.img, this.startt, this.endd);
    this.EduServ.save(edu).subscribe(
      data => {
        alert("Educación añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}
