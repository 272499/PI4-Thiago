import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  quantidade: number;
}

@Component({
  selector: 'app-lista2-exercicio-12',
  standalone: false,
  templateUrl: './exercicio-12.html',
  styleUrl: './exercicio-12.scss',
})
export class Exercicio12 {

  nome = '';
  quantidade: number | null = null;
  mensagem = '';

  produtos: Produto[] = [];

  proximoId = 1;

  cadastrar() {
    if (this.nome.trim() === '' || this.quantidade === null || this.quantidade < 0) {
      this.mensagem = 'Não foi possível realizar o cadastro.';
      return;
    }

    this.produtos.push({
      id: this.proximoId++,
      nome: this.nome,
      quantidade: this.quantidade
    });

    this.nome = '';
    this.quantidade = null;
    this.mensagem = '';
  }

  excluir(id: number) {
    this.produtos = this.produtos.filter(produto => produto.id !== id);
  }
}