/// <reference types="Cypress" />

describe("Central de Atendimento ao Cliente TAT", function () {
  beforeEach(function() {
    cy.visit("./cypress-basico-v2/src/index.html");

  });

  it("CT001 verifica o título da aplicação", function () {  
    cy.title().should("be.equal", "Central de Atendimento ao Cliente TAT");
  });

  it("CT002 preenche os campos obrigatotios e envia o formulario", function () {
    const longText = "Gostaria de expressar minha mais profunda gratidão por ter tido a oportunidade de participar do curso. Foi uma jornada incrível, repleta de aprendizado, desafios e crescimento pessoal. "
    cy.get("#firstName").should('be.visible').type("Tiago");
    cy.get("#lastName").should('be.visible').type("Alves");
    cy.get("#email").should('be.visible').type("tiagoh_alves@hotmail.com",);
    cy.get("#phone").should('be.visible').type("11980734020");
    cy.get("#open-text-area").should('be.visible').type(longText , {delay: 0});
    cy.get('button[type="submit"]').click();
    cy.get('.success > strong').should("be.visible");
  });

  it("CT003 exibe mensagem de erro ao submeter o formulário com um email com formatação inválida",function(){
    cy.get("#firstName").should('be.visible').type("Tiago");
    cy.get("#lastName").should('be.visible').type("Alves");
    cy.get("#phone").should('be.visible').type("11980734020");
    cy.get("#open-text-area").should('be.visible').type("Muito obrigado pelo curso", {delay: 2});
    cy.get('button[type="submit"]').click();
    cy.get('.error > strong').should('be.visible');
  });

  it("CT004 verificar que ao enviar letras o campo telefone continua vazio", function(){
    cy.get("#firstName").should('be.visible').type("Tiago");
    cy.get("#lastName").should('be.visible').type("Alves");
    cy.get("#email").should('be.visible').type("tiagoh_alves@hotmail.com",);
    cy.get("#phone").should('be.visible').type("Tiago");
    cy.get('#phone').should('have.value','');
  });

  it("CT005 verificar mensagem de erro quando o campo telefone nao é preenchido", function(){
    cy.get("#firstName").should('be.visible').type("Tiago");
    cy.get("#lastName").should('be.visible').type("Alves");
    cy.get("#email").should('be.visible').type("tiagoh_alves@hotmail.com",);
    cy.get('#phone-checkbox').click();
    cy.get('.phone-label-span').should('be.visible');
    cy.get("#open-text-area").should('be.visible').type("Muito obrigado pelo curso", {delay: 2});
    cy.get('button[type="submit"]').click();
    cy.get('.error > strong').should('be.visible');
  });

  it("CT006 preenche os campos obrigatotios e limpa", function () {
    cy.get("#firstName").should('be.visible').type("Tiago").should('have.value','Tiago').clear().should('have.value','');
    cy.get("#lastName").should('be.visible').type("Alves").should('have.value','Alves').clear().should('have.value','');
    cy.get("#email").should('be.visible').type("tiagoh_alves@hotmail.com").clear().should('have.value','');
    cy.get("#phone").should('be.visible').type("11980734020").clear().should('have.value','');
    cy.get("#open-text-area").should('be.visible').type("Muito obrigado pelo curso" , {delay: 2}).clear().should('have.value','');
    cy.get('button[type="submit"]').click();
    cy.get('.error > strong').should("be.visible");
  });

  it("CT007 exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios", function(){
    cy.get('button[type="submit"]').should("be.visible").click();
    cy.get('.error > strong').should("be.visible");
  });

  it("CT008 Envia o formulario com comando customizado ",function(){
    cy.fillMandatoryFieldsAndSubmit()
  });

  it("CT009 clicar no botão enivar utilizando o Contains", function(){
    cy.contains('button','Enviar').click();
    cy.get('.error > strong').should("be.visible");
  });

  it("CT010 Enviar o formulario utilizando uma selecao suspença", function(){
    cy.get("#firstName").should('be.visible').type("Tiago");
    cy.get("#lastName").should('be.visible').type("Alves");
    cy.get("#email").should('be.visible').type("tiagoh_alves@hotmail.com",);
    cy.get("#phone").should('be.visible').type("11980734020");
    cy.get('#product').select('Cursos').should('have.value','cursos')
    cy.get("#open-text-area").should('be.visible').type( "muito obrigado pelo curso" , {delay: 0});
    cy.get('button[type="submit"]').click();
    cy.get('.success > strong').should("be.visible");
  });

  it("CT011 Enviar o formulario utilizando uma selecao por valor", function(){
    cy.get("#firstName").should('be.visible').type("Tiago");
    cy.get("#lastName").should('be.visible').type("Alves");
    cy.get("#email").should('be.visible').type("tiagoh_alves@hotmail.com",);
    cy.get("#phone").should('be.visible').type("11980734020");
    cy.get('#product').select('mentoria').should('have.value','mentoria')
    cy.get("#open-text-area").should('be.visible').type( "muito obrigado pelo curso" , {delay: 0});
    cy.get('button[type="submit"]').click();
    cy.get('.success > strong').should("be.visible");
  });

  it("CT012 Enviar o formulario utilizando uma selecao por indice", function(){
    cy.get("#firstName").should('be.visible').type("Tiago");
    cy.get("#lastName").should('be.visible').type("Alves");
    cy.get("#email").should('be.visible').type("tiagoh_alves@hotmail.com",);
    cy.get("#phone").should('be.visible').type("11980734020");
    cy.get('#product').select(4).should('have.value','youtube')
    cy.get("#open-text-area").should('be.visible').type( "muito obrigado pelo curso" , {delay: 0});
    cy.get('button[type="submit"]').click();
    cy.get('.success > strong').should("be.visible");
  });

  it("CT013 Enviar o formulario utilizando uma selecao com check", function(){
    cy.get("#firstName").should('be.visible').type("Tiago");
    cy.get("#lastName").should('be.visible').type("Alves");
    cy.get("#email").should('be.visible').type("tiagoh_alves@hotmail.com",);
    cy.get("#phone").should('be.visible').type("11980734020");
    cy.get('#product').select('Cursos').should('have.value','cursos')
    cy.get('input[type="radio"][value="feedback"]').check().should("have.value","feedback");
    cy.get("#open-text-area").should('be.visible').type( "muito obrigado pelo curso" , {delay: 0});
    cy.get('button[type="submit"]').click();
    cy.get('.success > strong').should("be.visible");
  });

  it("CT014 Enviar o formulario desmarcando uma selecao com checkbox", function(){
    cy.get("#firstName").should('be.visible').type("Tiago");
    cy.get("#lastName").should('be.visible').type("Alves");
    cy.get("#email").should('be.visible').type("tiagoh_alves@hotmail.com",);
    cy.get("#phone").should('be.visible').type("11980734020");
    cy.get('#product').select('Cursos').should('have.value','cursos')
    cy.get('input[type="radio"][value="feedback"]').check().should("have.value","feedback");
    cy.get('input[type="checkbox"]').check()
    cy.get('input[type="checkbox"]').uncheck().should("not.be.checked")
    cy.get("#open-text-area").should('be.visible').type( "muito obrigado pelo curso" , {delay: 0});
    cy.get('button[type="submit"]').click();
    cy.get('.success > strong').should("be.visible");
  });
  
  it("CT015 Enviar o formulario enviando um arquivo", function(){
    cy.get("#firstName").should('be.visible').type("Tiago");
    cy.get("#lastName").should('be.visible').type("Alves");
    cy.get("#email").should('be.visible').type("tiagoh_alves@hotmail.com",);
    cy.get("#phone").should('be.visible').type("11980734020");
    cy.get('#product').select('Cursos').should('have.value','cursos')
    cy.get('input[type="radio"][value="feedback"]').check().should("have.value","feedback");
    cy.get('input[type="checkbox"]').check()
    cy.get("#open-text-area").should('be.visible').type( "muito obrigado pelo curso" , {delay: 0});
    cy.get('input[type="file"]#file-upload').selectFile("./cypress-basico-v2/src/index.html")
    .should(function ($input){
      expect($input[0].files[0].name).to.equal("index.html")
    })
    cy.get('button[type="submit"]').click();
    cy.get('.success > strong').should("be.visible");
  });

  // simulando o envio de um arquivo, como se estivesse arrastando o conteudo 
  it("CT016 selecione um arquivo utilizando Drag and Drop",function(){
    cy.get('input[type="file"]#file-upload')
    .selectFile("./cypress-basico-v2/src/index.html", {action: 'drag-drop'}).should(function ($input){
      expect($input[0].files[0].name).to.equal("index.html")
    })
  })

  it.only("CT017 verificar Poliitica de privacidade" , function () {
    cy.get('#privacy a').should('have.attr', 'target', '_blank')
  })
})