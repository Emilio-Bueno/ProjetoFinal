import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.css']
})
export class AlunosFormComponent implements OnInit {
  formGroupAluno: FormGroup;
  submitted: boolean = false;
  isEditing: boolean = false;

  constructor(private formBuilder: FormBuilder, private alunoService: AlunoService, private route: ActivatedRoute, private router: Router) {

    this.formGroupAluno = formBuilder.group({
      id: [''],
      nome: ['', [Validators.required]],
      idade: ['', [Validators.required]],
      endereco: ['', [Validators.required]]
    });
  }
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.getAlunoById(id);
  }

  getAlunoById(id: number) {
    this.alunoService.getAluno(id).subscribe({
      next: data => {
        this.formGroupAluno.setValue(data);
        this.isEditing = true;
      }
    })
  }


  save() {
    this.submitted = true;
    if (this.formGroupAluno.valid) {
      if (this.isEditing) {
        this.alunoService.update(this.formGroupAluno.value).subscribe({
          next: () => {
            this.router.navigate(['alunos']);
          }
        })
      }
      else {
        this.alunoService.save(this.formGroupAluno.value).subscribe({
          next: () => {
            this.router.navigate(['alunos']);
          }
        })
      }
    }
  }

  cancel() {
    this.router.navigate(['alunos']);
  }

  get nome(): any {
    return this.formGroupAluno.get("nome");
  }
  get idade(): any {
    return this.formGroupAluno.get("idade");
  }
  get endereco(): any {
    return this.formGroupAluno.get("endereco");
  }
}