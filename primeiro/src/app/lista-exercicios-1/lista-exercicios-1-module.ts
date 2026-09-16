import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Exercicio01 } from './exercicio-01/exercicio-01';
import { Exercicio02 } from './exercicio-02/exercicio-02';
import { Exercicio03 } from './exercicio-03/exercicio-03';
import { Exercicio04 } from './exercicio-04/exercicio-04';
import { Exercicio05 } from './exercicio-05/exercicio-05';
import { Exercicio06 } from './exercicio-06/exercicio-06';
import { Exercicio07 } from './exercicio-07/exercicio-07';
import { Exercicio08 } from './exercicio-08/exercicio-08';
import { Exercicio09 } from './exercicio-09/exercicio-09';
import { Exercicio10 } from './exercicio-10/exercicio-10';
import { Exercicio11 } from './exercicio-11/exercicio-11';
import { DesafioFinal } from './desafio-final/desafio-final';

@NgModule({
  declarations: [
    Exercicio01,
    Exercicio02,
    Exercicio03,
    Exercicio04,
    Exercicio05,
    Exercicio06,
    Exercicio07,
    Exercicio08,
    Exercicio09,
    Exercicio10,
    Exercicio11,
    DesafioFinal,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    Exercicio01,
    Exercicio02,
    Exercicio03,
    Exercicio04,
    Exercicio05,
    Exercicio06,
    Exercicio07,
    Exercicio08,
    Exercicio09,
    Exercicio10,
    Exercicio11,
    DesafioFinal
  ],
})
export class ListaExercicios1Module {}
