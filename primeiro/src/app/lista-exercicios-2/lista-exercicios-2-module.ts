import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Exercicio01 } from './exercicio-01/exercicio-01';

@NgModule({
  declarations: [Exercicio01],
  imports: [CommonModule, FormsModule],
  exports: [Exercicio01]
})
export class ListaExercicios2Module {}