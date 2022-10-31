import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticationServiceService } from 'src/app/servicios/autentication-service.service';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent implements OnInit {
  form:FormGroup;

  constructor(private formbuilder:FormBuilder, private autenticationService:AutenticationServiceService, private ruta:Router) { 
    this.form=this.formbuilder.group(
      {
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required,Validators.minLength(8)]],
        deviceInfo:this.formbuilder.group({
          devideId: ("asd"),
          devideType:("asd"),
          notificationToken:("asd")
        })
      }
    )
  }

  ngOnInit(): void {
  }

  get Email()
  {
    return this.form.get('email');
  }

  get Password()
  {
    return this.form.get('password');
  }

  onEnviar(event:Event){
    event.preventDefault;
    this.autenticationService.iniciarSesion(this.form.value).subscribe(data=>{
      console.log("DATA:" + JSON.stringify(data));
      this.ruta.navigate(['/portfolio']);
    })
  }

}
