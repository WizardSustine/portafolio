import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { PorfolioService } from './servicios/porfolio.service';
import { HttpClientModule } from '@angular/common/http';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { FooterComponent } from './components/footer/footer.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { EducationComponent } from './components/education/education.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { BannerComponent } from './components/header/banner/banner.component';
import { SocialinksComponent } from './components/header/socialinks/socialinks.component';

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
    SocialinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
