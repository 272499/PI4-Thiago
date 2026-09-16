import { Component } from '@angular/core';

@Component({
  selector: 'app-desafio-final',
  standalone: false,
  templateUrl: './desafio-final.html',
  styleUrl: './desafio-final.scss',
})
export class DesafioFinal {
  
  nome = '';
  quantidadeDisciplinas = 1;
  mensagem = '';

  aumentar() {
    this.quantidadeDisciplinas++;
  }

  diminuir() {
    if (this.quantidadeDisciplinas > 1) {
      this.quantidadeDisciplinas--;
    }
  }

  matricular() {
    this.mensagem =
      `${this.nome} foi matriculado em ${this.quantidadeDisciplinas} disciplina(s).`;
  }
}
