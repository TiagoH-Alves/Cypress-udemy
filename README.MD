```markdown
# Projeto de Automação de Front-End com Cypress

Este é um projeto de automação de front-end utilizando o Cypress para testar sua aplicação web. O Cypress é uma ferramenta poderosa e fácil de usar para escrever e executar testes de interface do usuário de forma eficiente.

## Pré-requisitos

Antes de começar, certifique-se de que você tenha as seguintes dependências instaladas:

- Node.js: [https://nodejs.org/](https://nodejs.org/)

### Clonando o Projeto

Você pode clonar este projeto do GitHub utilizando o seguinte comando:

```bash
git clone https://github.com/TiagoH-Alves/cypressFrontEnd.git
```

Em seguida, navegue até o diretório do projeto:

```bash
cd cypressFrontEnd
```

Certifique-se de instalar as dependências do projeto executando o seguinte comando:

```bash
npm install
```

## Comandos Disponíveis

Neste projeto, você pode executar os seguintes comandos:

1. Abrir a interface de teste do Cypress:

```bash
npm run cy:open
```

Isso abrirá a interface do Cypress, onde você pode selecionar e executar testes interativamente.

2. Abrir a interface de teste do Cypress em modo de visualização móvel:

```bash
npm run cy:open:mobile
```

Este comando abrirá a interface do Cypress com a configuração de visualização móvel, definindo as dimensões da viewport para 410x860. Útil para testes de responsividade.

3. Executar os testes em segundo plano (headless mode):

```bash
npm test
```

Este comando executa os testes do Cypress em segundo plano, sem a interface gráfica. É útil para integração contínua.

## Estrutura do Projeto

A estrutura do projeto Cypress é organizada da seguinte forma:

- `cypress/`: Este diretório contém os testes, fixtures e suporte personalizado para seus testes.
- `cypress/integration/`: Aqui você pode adicionar seus testes de interface do usuário.
- `cypress/fixtures/`: Este diretório é usado para armazenar arquivos de dados usados em seus testes.
- `cypress/support/`: Você pode definir funções de suporte personalizadas, comandos e configurações aqui.
```