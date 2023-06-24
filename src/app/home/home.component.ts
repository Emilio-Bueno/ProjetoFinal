import { Component, OnInit } from '@angular/core';
import { Alunos } from '../aluno';
import { AlunoService } from '../aluno.service';
import { Professores } from '../professor';
import { ProfessorService } from '../professor.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  alunos: Alunos[] = [];
  professores: Professores[] = [];

  constructor(private alunoService: AlunoService, private professorService: ProfessorService) { }

  ngOnInit(): void {
    this.loadAlunos();
    this.loadProfessores();
  }

  loadAlunos() {
    this.alunoService.getAlunos().subscribe({
      next: data => this.alunos = data
    });
  }

  loadProfessores() {
    this.professorService.getProfessor().subscribe({
      next: data => this.professores = data
    });
  }
}
