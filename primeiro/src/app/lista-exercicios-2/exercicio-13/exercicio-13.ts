import { Component } from '@angular/core';

interface Tarefa {
  id: number;
  titulo: string;
  responsavel: string;
  prioridade: 'baixa' | 'media' | 'alta';
  concluida: boolean;
}

@Component({
  selector: 'app-lista2-exercicio-13',
  standalone: false,
  templateUrl: './exercicio-13.html',
  styleUrl: './exercicio-13.scss',
})
export class Exercicio13 {

  tarefas: Tarefa[] = [
    { id: 1, titulo: 'Criar banco de dados', responsavel: 'Ana', prioridade: 'alta', concluida: false },
    { id: 2, titulo: 'Criar interface', responsavel: 'Bruno', prioridade: 'media', concluida: true },
    { id: 3, titulo: 'Testar sistema', responsavel: 'Carlos', prioridade: 'alta', concluida: false },
    { id: 4, titulo: 'Criar documentação', responsavel: 'Daniela', prioridade: 'baixa', concluida: true },
    { id: 5, titulo: 'Configurar servidor', responsavel: 'Eduardo', prioridade: 'media', concluida: false },
    { id: 6, titulo: 'Revisar projeto', responsavel: 'Fernanda', prioridade: 'baixa', concluida: false }
  ];

  alterarSituacao(tarefa: Tarefa) {
    tarefa.concluida = !tarefa.concluida;
  }

  totalConcluidas() {
    return this.tarefas.filter(tarefa => tarefa.concluida).length;
  }

  totalPendentes() {
    return this.tarefas.filter(tarefa => !tarefa.concluida).length;
  }
}