import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}

interface Tarefa {
  id: number;
  titulo: string;
  concluida: boolean;
}

@Component({
  selector: 'app-lista2-exercicio-14',
  standalone: false,
  templateUrl: './exercicio-14.html',
  styleUrl: './exercicio-14.scss',
})
export class Exercicio14 {

  usuarioLogado = false;

  produtos: Produto[] = [
    { id: 1, nome: 'Teclado', preco: 150, quantidade: 5 },
    { id: 2, nome: 'Mouse', preco: 80, quantidade: 3 },
    { id: 3, nome: 'Monitor', preco: 900, quantidade: 8 }
  ];

  tarefas: Tarefa[] = [
    { id: 1, titulo: 'Criar banco de dados', concluida: false },
    { id: 2, titulo: 'Criar interface', concluida: true },
    { id: 3, titulo: 'Testar sistema', concluida: false }
  ];

  alternarLogin() {
    this.usuarioLogado = !this.usuarioLogado;
  }

  alterarSituacao(tarefa: Tarefa) {
    tarefa.concluida = !tarefa.concluida;
  }
}