Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get("#firstName").should('be.visible').type("Tiago");
    cy.get("#lastName").should('be.visible').type("Alves");
    cy.get("#email").should('be.visible').type("tiagoh_alves@hotmail.com",);
    cy.get("#phone").should('be.visible').type("11980734020");
    cy.get("#open-text-area").should('be.visible').type("teste");
    cy.get('button[type="submit"]').click();
    cy.get('.success > strong').should("be.visible");
});
