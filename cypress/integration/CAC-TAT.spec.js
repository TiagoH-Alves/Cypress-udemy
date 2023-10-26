/// <reference types="Cypress" />

const { values } = require("cypress/types/lodash");

describe("Central de Atendimento ao Cliente TAT", function () {
  beforeEach(function() {
    cy.visit("./cypress-basico-v2/src/index.html");
  });

  it("verifica o título da aplicação", function () {  
    cy.title().should("be.equal", "Central de Atendimento ao Cliente TAT");
  });

  it("preenche os campos obrigatotios e envia o formulario", function () {
    const longText = "Gostaria de expressar minha mais profunda gratidão por ter tido a oportunidade de participar do curso. Foi uma jornada incrível, repleta de aprendizado, desafios e crescimento pessoal. "
    cy.get("#firstName").should('be.visible').type("Tiago");
    cy.get("#lastName").should('be.visible').type("Alves");
    cy.get("#email").should('be.visible').type("tiagoh_alves@hotmail.com",);
    cy.get("#phone").should('be.visible').type("11980734020");
    cy.get("#open-text-area").should('be.visible').type(longText , {delay: 0});
    cy.get('button[type="submit"]').click();
    cy.get('.success > strong').should("be.visible");
  });

  it("exibe mensagem de erro ao submeter o formulário com um email com formatação inválida",function(){
    cy.get("#firstName").should('be.visible').type("Tiago");
    cy.get("#lastName").should('be.visible').type("Alves");
    cy.get("#phone").should('be.visible').type("11980734020");
    cy.get("#open-text-area").should('be.visible').type("Muito obrigado pelo curso", {delay: 0});
    cy.get('button[type="submit"]').click();
    cy.get('.error > strong').should('be.visible');
  });

  it("verificar que ao enviar letras o campo telefone continua vazio", function(){
    cy.get("#firstName").should('be.visible').type("Tiago");
    cy.get("#lastName").should('be.visible').type("Alves");
    cy.get("#email").should('be.visible').type("tiagoh_alves@hotmail.com",);
    cy.get("#phone").should('be.visible').type("Tiago");
    cy.get('#phone').should('have.value',null);
  });
});