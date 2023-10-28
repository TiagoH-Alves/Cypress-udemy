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
  })

  it("CT009 clicar no botão enivar utilizando o Contains", function(){
    cy.contains('button','Enviar').click();
    cy.get('.error > strong').should("be.visible");
  })

  /*it.("CT009 enviando formulario com dados sensiveis", function (){
    const firstName = Cypress.env('user_name');
    cy.log (firstName)
    const lastName = Cypress.env('last_name');
    
    cy.get("#firstName").should('be.visible').type(firstName);
    cy.get("#lastName").should('be.visible').type(lastName);
    cy.get("#email").should('be.visible').type("tiagoh_alves@hotmail.com",);
    cy.get("#phone").should('be.visible').type("11980734020");
    cy.get("#open-text-area").should('be.visible').type("enviando dados sensiveis");
    cy.get('button[type="submit"]').click();
    cy.get('.success > strong').should("be.visible");
  })
  */

});