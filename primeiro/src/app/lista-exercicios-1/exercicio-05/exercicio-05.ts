import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio-05',
  standalone: false,
  templateUrl: './exercicio-05.html',
  styleUrl: './exercicio-05.scss',
})
export class Exercicio05 {
  
  curtidas = 0;

  curtir() {
    this.curtidas++;
  }
}
