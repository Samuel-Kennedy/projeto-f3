import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-menu',
  templateUrl: './info-menu.component.html',
  styleUrls: ['./info-menu.component.less']
})
export class InfoMenuComponent {
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
