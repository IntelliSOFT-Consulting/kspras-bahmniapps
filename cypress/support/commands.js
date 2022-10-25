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
//
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
Cypress.Commands.add("login", (locale,username, password,location) => {
    cy.visit("https://testkspras.intellisoftkenya.com/bahmni/home/index.html#/login")
        cy.get("#locale").select("string:en")
        cy.get("#username").type("User")
        cy.get("#password").type("Userone@123")
        cy.get("#location").select("Moi Teaching And Referral Hospital")
        cy.get('form.ng-dirty > .login-body > .form-footer > .confirm').click()
        cy.wait(5000)
    })