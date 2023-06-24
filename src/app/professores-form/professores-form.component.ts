import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Professores } from '../professor';

@Component({
  selector: 'app-professores-form',
  templateUrl: './professores-form.component.html',
  styleUrls: ['./professores-form.component.css']
})
export class ProfessoresFormComponent implements OnChanges {
  submitted: boolean = false;

  @Input()
  professor: Professores = {} as Professores;

  @Output()
  saveEvent = new EventEmitter<Professores>();

  @Output()
  cleanEvent = new EventEmitter<boolean>();


  formGroupProfessor: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroupProfessor = this.formBuilder.group({
      id: [''],
      nome: ['', [Validators.required]],
      telefone: ['', [Validators.required]],
      idade: ['', [Validators.required]]
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.formGroupProfessor.setValue(this.professor);
  }

  save() {
    this.submitted = true;
    if (this.formGroupProfessor.valid) {
      this.saveEvent.emit(this.formGroupProfessor.value);
      this.formGroupProfessor.reset();
      this.submitted = false;
    }
  }

  clean() {
    this.formGroupProfessor.reset();
    this.cleanEvent.emit(false);
  }

  get nome(): any {
    return this.formGroupProfessor.get('nome');
  }

  get telefone(): any {
    return this.formGroupProfessor.get('telefone');
  }

  get idade(): any {
    return this.formGroupProfessor.get('idade');
  }
}
