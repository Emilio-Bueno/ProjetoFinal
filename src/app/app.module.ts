import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlunosComponent } from './alunos/alunos.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { ProfessoresComponent } from './professores/professores.component';
import { ProfessoresFormComponent } from './professores-form/professores-form.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AlunosComponent,
    AlunosFormComponent,
    ProfessoresComponent,
    ProfessoresFormComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
