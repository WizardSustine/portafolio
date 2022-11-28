import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-socialinks',
  templateUrl: './socialinks.component.html',
  styleUrls: ['./socialinks.component.css']
})
export class SocialinksComponent implements OnInit {
  isLogged = false;


  constructor( private router:Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged = false;
    }
  }
  login(){
    this.router.navigate(['/sesion']);
  };
  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }
}
function login() {
  throw new Error('Function not implemented.');
}

