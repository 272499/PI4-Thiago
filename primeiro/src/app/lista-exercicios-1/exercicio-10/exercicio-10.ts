import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio-10',
  standalone: false,
  templateUrl: './exercicio-10.html',
  styleUrl: './exercicio-10.scss',
})
export class Exercicio10 {
  usuario = '';
  senha = '';
  mensagem = '';

  entrar() {
    this.mensagem = `Bem-vindo, ${this.usuario}!`;
  }
}
