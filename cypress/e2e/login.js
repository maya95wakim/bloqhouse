import user from '../fixtures/user.json'
import { getLanguage } from '../support/page-objects/helper'
import {setLocale, translate } from '../support/page-objects/i18n'

describe('login', () => {
    beforeEach('visit the root site', () => {
        cy
            .visit('/')
    })
    it('should login successfully ', () => {
        cy.login(Cypress.env('username'),Cypress.env('password'))
        setLocale(getLanguage())
        cy
            .get('.common-nav-container')
            .find('#common-nav-btn--dropdown__BV_toggle_', { timeout: 1000 })
            .then(loginButton => {
                cy
                    .wrap(loginButton)
                    .should('be.visible')
                cy
                    .wrap(loginButton)
                    .invoke('text')
                    .should('equals', translate('dashboard'))
            })
    })
    it('should give an error that the email is not valid', () => {
        cy
            .get('.common-nav-container')
            .find('[data-testid="loginButton"]')
            .click()
        cy
            .get('input[name="email"]')
            .click()
            .clear()
            .type(user.invalidUser.username)
        cy
            .get('input[name="password"]')
            .click()
            .clear()
            .type(Cypress.env('password'))
        cy
            .get('input[name="email"]')
            .invoke('attr', 'class')
            .should('contains', 'is-invalid')

        setLocale(getLanguage())
        cy
            .get('.form-group')
            .find('span')
            .invoke('text')
            .should('contains', translate('emailAlert'))
        cy
            .get('#submitLoginButton')
            .should('be.disabled')
    })
    it('should give an error that the password is not correct', () => {
        cy
            .get('.common-nav-container')
            .find('[data-testid="loginButton"]')
            .click()
        cy
            .get('input[name="email"]')
            .click()
            .clear()
            .type(Cypress.env('username'))
        cy
            .get('input[name="password"]')
            .click()
            .clear()
            .type(user.invalidPassword.password)
        cy
            .get('#submitLoginButton')
            .click()
        cy
            .get('[role="alert"]')
            .then(alert => {
                cy
                    .wrap(alert)
                    .invoke('attr', 'class')
                    .should('contains', 'alert')
                    .and('contains', 'alert--danger')
                setLocale(getLanguage())
                cy
                    .wrap(alert)
                    .invoke('text')
                    .should('contains', translate('passwordAlert'))
            })

    })
    afterEach('logout to try multiple login scenarios', () => {
        cy.logout()
    })
})