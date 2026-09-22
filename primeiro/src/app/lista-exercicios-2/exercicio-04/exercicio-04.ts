import { Component } from '@angular/core';

@Component({
  selector: 'app-lista2-exercicio-04',
  standalone: false,
  templateUrl: './exercicio-04.html',
  styleUrl: './exercicio-04.scss',
})
export class Exercicio04 {
  nomeProduto = 'Teclado';
  quantidadeEstoque = 5;

  adicionar() {
    this.quantidadeEstoque++;
  }

  remover() {
    if (this.quantidadeEstoque > 0) {
      this.quantidadeEstoque--;
    }
  }
}
