import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio-09',
  standalone: false,
  templateUrl: './exercicio-09.html',
  styleUrl: './exercicio-09.scss',
})
export class Exercicio09 {
  
  produto = 'Mouse Gamer';
  estoque = 0;

  aumentar() {
    this.estoque++;
  }

  diminuir() {
    if (this.estoque > 0) {
      this.estoque--;
    }
  }
}
