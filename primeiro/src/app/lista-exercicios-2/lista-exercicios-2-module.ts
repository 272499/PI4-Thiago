import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Exercicio01 } from './exercicio-01/exercicio-01';
import { Exercicio02 } from './exercicio-02/exercicio-02';
import { Exercicio03 } from './exercicio-03/exercicio-03';
import { Exercicio04 } from './exercicio-04/exercicio-04';

@NgModule({
  declarations: [Exercicio01, Exercicio02, Exercicio03, Exercicio04],
  imports: [CommonModule, FormsModule],
  exports: [Exercicio01, Exercicio02, Exercicio03, Exercicio04],
})
export class ListaExercicios2Module {}
