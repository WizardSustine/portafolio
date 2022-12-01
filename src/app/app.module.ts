import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { PorfolioService } from './servicios/porfolio.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { FooterComponent } from './components/footer/footer.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { EducationComponent } from './components/education/education.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { BannerComponent } from './components/header/banner/banner.component';
import { SocialinksComponent } from './components/header/socialinks/socialinks.component';
import { SesionComponent } from './components/sesion/sesion.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InterceptorService } from './servicios/interceptor.service';
import { FormsModule } from '@angular/forms';
import { NuevaExpComponent } from './components/experiences/nueva-exp.component';
import { EditExpComponent } from './components/experiences/edit-exp.component';
import { NuevaEduComponent } from './components/education/nueva-edu.component';
import { EditEduComponent } from './components/education/edit-edu.component';
import { NuevaHabiComponent } from './components/skills/nueva-habi.component';
import { EditHabiComponent } from './components/skills/edit-habi.component';
import { NuevaProyecComponent } from './components/projects/nueva-proyec.component';
import { EditProyecComponent } from './components/projects/edit-proyec.component';
import { NuevoaboutComponent } from './components/about/nuevoabout.component';

const firebaseConfig = {
  apiKey: "AIzaSyANDG2FkkdiIQ2ZmSHRPmXTvW3OJ86VpSU",
  authDomain: "portfolio-web-argentinap.firebaseapp.com",
  projectId: "portfolio-web-argentinap",
  storageBucket: "portfolio-web-argentinap.appspot.com",
  messagingSenderId: "857812538950",
  appId: "1:857812538950:web:657a78092d5ef3fdd6dc47"
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ExperiencesComponent,
    FooterComponent,
    SkillsComponent,
    ProjectsComponent,
    EducationComponent,
    LogoComponent,
    BannerComponent,
    SocialinksComponent,
    SesionComponent,
    PortfolioComponent,
    NuevaExpComponent,
    EditExpComponent,
    NuevaEduComponent,
    EditEduComponent,
    NuevaHabiComponent,
    EditHabiComponent,
    NuevaProyecComponent,
    EditProyecComponent,
    NuevoaboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [PorfolioService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
