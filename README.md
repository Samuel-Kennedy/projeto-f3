# ProjetoF3

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.3.


Este é um projeto da Navega, visa realizar a administração do seu Plano, tendo tela de login e home. Desenvolvido com Angular, esse sistema visa fornecer detalhes sobre o plano do usuário, após acessar o login será disponibilizado algumas abas, onde será possível navegar e visualizar as informações nos cards de forma dinâmica, tendo os seguintes eventos, Ver extrato, Contribuição Mensal, Contribuição Extra, Documentos, Regime de Tributação, Solicitar Benefício, Extrato Regressivo e Informações, além disto também é disponibilizado em cada aba a informações do gráfico, ainda imcompleto e tendo apenas a versão da Contribuição Mensal, porém podendo ser visto em outras telas.

# Como rodar o projeto

Após rodar o comando `ng serve` você será redirecionado por padrão para aba de acessar, você pode colocar seu e-mail e senha, porém o sistema não possui validações ou itens do gênero, basta clicar em acessar que você será redirecionado para a parte de home, neste cenário será possível navegar pelos botões, as informações no card a baixo estão de forma dinâmica, sendo apenas o gráfico não sendo dinâmico, caso queira voltar ao login basta clicar no canto superior esquerdo na seta ao lado esquerdo do plano e você poderá voltar para a parte inicial.

# Itens Não funcionais

- Botões nos cards e Botão a baixo dos cards.
- Acessar aqui a baixo do botão acessar na aba de login.
- Logo tipo na aba de login.
- Icons e Img no header.
- Dinâmica do gráfico (Não está apresentando informações dos outros botões, porém funcionalidade do gráfico está perfeita).

# Itens Fora do Figma

- Icons no angular material divergentes com o do Figma.
- Cor do gráfico e informações a baixo da legenda (Sem link proposta de implementação de gráfico - Implementado a biblioteca"ngx-charts-pie-chart").
- Fonts do Angular Material e Implementação Google Fonts (não especificado).

# Itens funcionais
- Botão Acessar login.
- Funcionalidade do gráfico
- Botões do home dinâmicos juntamente com o card, informações dinâmicas.
- Seta do meu plano (home).
- Responsividade em Aparelho celulares, faltando apenas a parte de contribuições para retornar, tendo a possibilidade apenas voltar ao meu plano e inicializar no mensal, porém poderá ser considerado extra de acordo com o Figma.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.