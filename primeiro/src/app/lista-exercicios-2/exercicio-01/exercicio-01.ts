import { Component } from '@angular/core';

@Component({
  selector: 'app-lista2-exercicio-01',
  standalone: false,
  templateUrl: './exercicio-01.html',
  styleUrl: './exercicio-01.scss',
})
export class Exercicio01 {
  mensagemVisivel = false;

  alternarMensagem() {
    this.mensagemVisivel = !this.mensagemVisivel;
  }
}
