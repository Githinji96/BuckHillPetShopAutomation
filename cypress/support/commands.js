// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('login', () => {
    cy.visit('https://pet-shop.buckhill.com.hr/')

    cy.get('.ml-6').click();
    cy.get('#input-10').type('Bonfacegithinji64@gmail.com')
    
    cy.get('#input-12').type('Bg12345#')
    cy.get('.login__form > .v-btn').click()
    cy.url().should('eq','https://pet-shop.buckhill.com.hr/')
});
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })