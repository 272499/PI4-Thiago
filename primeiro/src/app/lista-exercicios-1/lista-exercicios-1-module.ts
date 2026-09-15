import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Exercicio01 } from './exercicio-01/exercicio-01';
import { Exercicio02 } from './exercicio-02/exercicio-02';

@NgModule({
  declarations: [Exercicio01, Exercicio02],
  imports: [CommonModule, FormsModule],
  exports: [Exercicio01, Exercicio02],
})
export class ListaExercicios1Module {}
