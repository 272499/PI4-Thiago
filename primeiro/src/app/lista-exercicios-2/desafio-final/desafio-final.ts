import { Component } from '@angular/core';

interface Projeto {
  id: number;
  titulo: string;
  equipe: string;
  nota: number | null;
  status: 'planejamento' | 'desenvolvimento' | 'testes' | 'concluído';
  entregue: boolean;
}

@Component({
  selector: 'app-lista2-desafio-final',
  standalone: false,
  templateUrl: './desafio-final.html',
  styleUrl: './desafio-final.scss',
})
export class DesafioFinal {

  mostrarConcluidos = true;

  projetos: Projeto[] = [
    {
      id: 1,
      titulo: 'Sistema de Biblioteca',
      equipe: 'Equipe A',
      nota: 8,
      status: 'concluído',
      entregue: true
    },
    {
      id: 2,
      titulo: 'Sistema de Estoque',
      equipe: 'Equipe B',
      nota: 5,
      status: 'testes',
      entregue: false
    },
    {
      id: 3,
      titulo: 'Aplicativo Acadêmico',
      equipe: 'Equipe C',
      nota: null,
      status: 'desenvolvimento',
      entregue: false
    },
    {
      id: 4,
      titulo: 'Portal de Cursos',
      equipe: 'Equipe D',
      nota: 7,
      status: 'planejamento',
      entregue: false
    }
  ];

  alternarConcluidos() {
    this.mostrarConcluidos = !this.mostrarConcluidos;
  }

  alterarStatus(projeto: Projeto) {
    if (projeto.status === 'planejamento') {
      projeto.status = 'desenvolvimento';
    } else if (projeto.status === 'desenvolvimento') {
      projeto.status = 'testes';
    } else if (projeto.status === 'testes') {
      projeto.status = 'concluído';
    } else {
      projeto.status = 'planejamento';
    }
  }

  totalConcluidos() {
    return this.projetos.filter(
      projeto => projeto.status === 'concluído'
    ).length;
  }
}