import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
  promocao: boolean;
}

@Component({
  selector: 'app-lista2-exercicio-10',
  standalone: false,
  templateUrl: './exercicio-10.html',
  styleUrl: './exercicio-10.scss',
})
export class Exercicio10 {

  produtos: Produto[] = [
    { id: 1, nome: 'Teclado', preco: 150, quantidade: 5, promocao: false },
    { id: 2, nome: 'Mouse', preco: 80, quantidade: 3, promocao: true },
    { id: 3, nome: 'Monitor', preco: 900, quantidade: 8, promocao: false },
    { id: 4, nome: 'Headset', preco: 200, quantidade: 5, promocao: true },
    { id: 5, nome: 'Webcam', preco: 250, quantidade: 10, promocao: false }
  ];

  alternarPromocao(produto: Produto) {
    produto.promocao = !produto.promocao;
  }
}