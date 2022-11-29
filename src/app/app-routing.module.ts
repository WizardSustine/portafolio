import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEduComponent } from './components/education/edit-edu.component';
import { NuevaEduComponent } from './components/education/nueva-edu.component';
import { EditExpComponent } from './components/experiences/edit-exp.component';
import { NuevaExpComponent } from './components/experiences/nueva-exp.component';
import { EditProyecComponent } from './components/projects/edit-proyec.component';
import { NuevaProyecComponent } from './components/projects/nueva-proyec.component';
import { SesionComponent } from './components/sesion/sesion.component';
import { EditHabiComponent } from './components/skills/edit-habi.component';
import { NuevaHabiComponent } from './components/skills/nueva-habi.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  {path:"", component:PortfolioComponent },
  {path:"sesion", component:SesionComponent},
  {path:'nuevaexpe', component:NuevaExpComponent},
  {path:'editexpe/:id', component:EditExpComponent},
  {path:'nuevaedu', component:NuevaEduComponent},
  {path:'editedu/:id', component:EditEduComponent},
  {path:'nuevahabil', component:NuevaHabiComponent},
  {path:'edithabil/:id', component:EditHabiComponent},
  {path:'nuevaproyec', component:NuevaProyecComponent},
  {path:'editproyec/:id', component:EditProyecComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
