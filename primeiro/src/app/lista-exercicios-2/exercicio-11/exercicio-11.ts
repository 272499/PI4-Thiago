import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}

@Component({
  selector: 'app-lista2-exercicio-11',
  standalone: false,
  templateUrl: './exercicio-11.html',
  styleUrl: './exercicio-11.scss',
})
export class Exercicio11 {

  somenteDisponiveis = false;

  produtos: Produto[] = [
    { id: 1, nome: 'Teclado', preco: 150, quantidade: 0 },
    { id: 2, nome: 'Mouse', preco: 80, quantidade: 3 },
    { id: 3, nome: 'Monitor', preco: 900, quantidade: 8 },
    { id: 4, nome: 'Headset', preco: 200, quantidade: 0 },
    { id: 5, nome: 'Webcam', preco: 250, quantidade: 10 }
  ];

  alternarExibicao() {
    this.somenteDisponiveis = !this.somenteDisponiveis;
  }
}