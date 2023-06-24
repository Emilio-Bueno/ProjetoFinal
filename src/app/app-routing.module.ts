import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessoresComponent } from './professores/professores.component';
import { HomeComponent } from './home/home.component';
import { AlunosComponent } from './alunos/alunos.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';

const routes: Routes = [
  {path: 'professores', component: ProfessoresComponent},
  {path: 'home', component: HomeComponent},
  {path: 'alunos', component: AlunosComponent},
  {path: 'alunoEdit/:id', component: AlunosFormComponent},
  {path: 'alunoCreate', component: AlunosFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }