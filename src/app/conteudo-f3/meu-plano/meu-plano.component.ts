import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-meu-plano',
  templateUrl: './meu-plano.component.html',
  styleUrls: ['./meu-plano.component.less']
})
export class MeuPlanoComponent {
  isClicked: boolean[] = [false, false, false, false, false, false, false, false];

  options = [
    {
      icon: 'request_quote',
      title: 'Ver extrato',
      subtitle: 'Valor da contribuição',
      value: 'R$ 500,00',
      buttonText: 'ALTERAR CONTRIBUIÇÃO'
    },
    {
      icon: 'monetization_on',
      title: 'Contribuição Mensal',
      subtitle: 'Valor da contribuição extra',
      tituloPorcentagemSalario: 'Porcentagem do salário',
      porcentagemSalario: '5%',
      value: 'R$ 500,00',
      buttonText: 'ALTERAR CONTRIBUIÇÃO'
    },
    {
      icon: 'local_atm',
      title: 'Contribuição Adicional',
      subtitle: 'Valor adicional',
      value: 'R$ 100,00',
      buttonText: 'ALTERAR CONTRIBUIÇÃO ADICIONAL'
    },
    {
      icon: 'description',
      title: 'Documentos',
      subtitle: 'Documentos disponíveis',
      value: '3 documentos',
      buttonText: 'VER DOCUMENTOS'
    },
    {
      icon: 'trending_up',
      title: 'Regime de Tributação',
      subtitle: 'Tipo de tributação',
      value: 'Simples Nacional',
      buttonText: 'ALTERAR REGIME'
    },
    {
      icon: 'chat_bubble_outline',
      title: 'Solicitar Benefício',
      subtitle: 'Valor do benefício',
      value: 'R$ 1.000,00',
      buttonText: 'SOLICITAR'
    },
    {
      icon: 'assessment',
      title: 'Extrato Regressivo',
      subtitle: 'Valor regressivo',
      value: 'R$ 1.500,00',
      buttonText: 'VER EXTRATO'
    },
    {
      icon: 'info',
      title: 'Informações',
      subtitle: 'Detalhes adicionais',
      value: 'Consultar detalhes',
      buttonText: 'CONSULTAR INFORMAÇÕES'
    }
  ];


  selectedOption: any;

  constructor(private router: Router, private cdRef: ChangeDetectorRef) { }


  ngOnInit(): void {
    this.alterarCorEventos(1);
  }

  enviarLogin(): void {
    this.router.navigate(['/login']);
  }
  alterarCorEventos(index: number): void {
    this.isClicked = this.isClicked.map((_, i) => i === index ? true : false);
    this.alterarCorEventos(1);
    this.selectedOption = this.options[index];
    this.cdRef.detectChanges();
  }

  manda() {
    this.router.navigate(['/login']);
  }


}

