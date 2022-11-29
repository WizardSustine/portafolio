import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionServiceService } from 'src/app/servicios/educacion-service.service';

@Component({
  selector: 'app-edit-edu',
  templateUrl: './edit-edu.component.html',
  styleUrls: ['./edit-edu.component.css']
})
export class EditEduComponent implements OnInit {
  edus: Educacion = null;

  constructor(private EducacionS: EducacionServiceService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.EducacionS.detail(id).subscribe(
      data =>{
        this.edus = data;
      }, err =>{
        alert("Error al modificar educación");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.EducacionS.update(id, this.edus).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar educación");
         this.router.navigate(['']);
      }
    )
  }
}
