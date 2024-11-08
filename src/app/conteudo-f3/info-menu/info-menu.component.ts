import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-info-menu',
  templateUrl: './info-menu.component.html',
  styleUrls: ['./info-menu.component.less']
})
export class InfoMenuComponent implements OnInit, OnDestroy {

  doughnutChartData = [
    {
      "name": 'Contribuição mensal',
      "value": 10000000
    },
    {
      "name": "Contribuição voluntária",
      "value": 49999999
    },
  ];
  legendPosition: LegendPosition = LegendPosition.Below;
  isMobile: boolean = false;
  @Input() titulo: string = '';
  @Input() icon: string = '';
  @Input() valorContribuicao: string = '';
  @Input() porcentagemSalario: string = '';
  @Input() descricaoBotao: string = '';
  @Input() tituloValorContribuicao: string = '';
  @Input() tituloPorcentagemSalario: string = '';
  @Input() botaoSecundario: string = '';

  constructor() { }

  ngOnInit(): void {
    this.checkMobileScreen();
    window.addEventListener('resize', this.checkMobileScreen.bind(this));
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.checkMobileScreen.bind(this));
  }

  checkMobileScreen(): void {
    this.isMobile = window.innerWidth <= 768;
  }
}
