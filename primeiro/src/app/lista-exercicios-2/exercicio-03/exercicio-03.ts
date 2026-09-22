import { Component } from '@angular/core';

@Component({
  selector: 'app-lista2-exercicio-03',
  standalone: false,
  templateUrl: './exercicio-03.html',
  styleUrl: './exercicio-03.scss',
})
export class Exercicio03 {
  idade = 0;

  aumentar() {
    this.idade++;
  }

  diminuir() {
    if (this.idade > 0) {
      this.idade--;
    }
  }
}
