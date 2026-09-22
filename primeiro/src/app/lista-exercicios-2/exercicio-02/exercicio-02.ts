import { Component } from '@angular/core';

@Component({
  selector: 'app-lista2-exercicio-02',
  standalone: false,
  templateUrl: './exercicio-02.html',
  styleUrl: './exercicio-02.scss',
})
export class Exercicio02 {
  usuarioLogado = false;

  alternarLogin() {
    this.usuarioLogado = !this.usuarioLogado;
  }
}
