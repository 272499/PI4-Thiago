import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio-06',
  standalone: false,
  templateUrl: './exercicio-06.html',
  styleUrl: './exercicio-06.scss',
})
export class Exercicio06 {
  quantidade = 0;

  aumentar() {
    this.quantidade++;
  }

  diminuir() {
    if (this.quantidade > 0) {
      this.quantidade--;
    }
  }
}
