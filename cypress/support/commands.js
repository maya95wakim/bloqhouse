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

Cypress.Commands.add('login', (username, password) => {

    cy.session([username, password], () => {
        cy
            .visit('/')
        cy
            .get('.common-nav-container')
            .find('[data-testid="loginButton"]')
            .click()
        cy
            .get('input[name="email"]')
            .click()
            .type(username)
        cy
            .get('input[name="password"]')
            .click()
            .type(password)
        cy
            .get('#submitLoginButton')
            .click()
        cy
            .get('.common-nav-container')
            .get('#common-nav-btn--dropdown__BV_toggle_', { timeout: 1000 })
            .should('be.visible')
    })
})

Cypress.Commands.add('logout', () => {
    cy
        .get('.common-nav-container')
        .then(result => {
            if (result.find('.dropdown').length > 0) {
                cy
                    .wrap(result)
                    .find('#common-nav-btn--dropdown')
                    .click()
                cy
                    .get('[role="menu"]')
                    .find('[aria-label="Logout"]')
                    .click()
            }
        })
    cy
        .get('.common-nav-container')
        .invoke('children')
        .then(children => {
            if (children.find('.common-nav-actions').length > 0) {
                cy
                    .wrap(children)
                    .get('.common-nav-actions')
                    .find('div')
                    .first()
                    .should('have.class','common-nav-login')
                    
            }
        })
})