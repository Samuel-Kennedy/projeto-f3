import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meu-plano',
  templateUrl: './meu-plano.component.html',
  styleUrls: ['./meu-plano.component.less']
})
export class MeuPlanoComponent {
  isClicked: boolean[] = [false, false, false, false, false, false, false, false];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  enviarLogin(): void {
    this.router.navigate(['/login']);
  }

  alterarCor(index: number): void {
    this.isClicked = this.isClicked.map((_, i) => i === index);
  }
  
}
