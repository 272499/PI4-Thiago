import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio-11',
  standalone: false,
  templateUrl: './exercicio-11.html',
  styleUrl: './exercicio-11.scss',
})
export class Exercicio11 {
  
  produto = 'Mouse Gamer';
  preco = 120;
  quantidade = 1;
  mensagem = '';

  aumentar() {
    this.quantidade++;
  }

  diminuir() {
    if (this.quantidade > 1) {
      this.quantidade--;
    }
  }

  adicionarCarrinho() {
    this.mensagem = `${this.quantidade} ${this.produto} adicionado(s) ao carrinho.`;
  }
}
