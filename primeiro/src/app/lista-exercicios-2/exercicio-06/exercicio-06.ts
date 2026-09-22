import { Component } from '@angular/core';

@Component({
  selector: 'app-lista2-exercicio-06',
  standalone: false,
  templateUrl: './exercicio-06.html',
  styleUrl: './exercicio-06.scss',
})
export class Exercicio06 {

  nomesIniciais = [
    'Pedro',
    'Jonas',
    'Marcos',
    'Lucas',
    'João'
  ];

  nomes = [...this.nomesIniciais];

  removerUltimo() {
    this.nomes.pop();
  }

  limparLista() {
    this.nomes = [];
  }

  restaurarLista() {
    this.nomes = [...this.nomesIniciais];
  }
}
