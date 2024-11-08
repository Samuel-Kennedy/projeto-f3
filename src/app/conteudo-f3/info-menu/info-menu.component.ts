import { Component, Input } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-info-menu',
  templateUrl: './info-menu.component.html',
  styleUrls: ['./info-menu.component.less']
})

export class InfoMenuComponent {

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

  @Input() titulo: string = '';
  @Input() icon: string = '';
  @Input() valorContribuicao: string = '';
  @Input() porcentagemSalario: string = '';
  @Input() descricaoBotao: string = '';
  @Input() tituloValorContribuicao: string = '';
  @Input() tituloPorcentagemSalario: string = '';
  @Input() botaoSecundario: string = '';

  ngOnInit(): void { }
}
