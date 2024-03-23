import { portfolioNav } from '../support/page-objects/navigation'
import { portfolio } from '../support/page-objects/portfolio'
describe('start investing full flow', () => {
    beforeEach('', () => {
        cy.login(Cypress.env('username'), Cypress.env('password'))
    })
    it('should change the language to english and check the main options', () => {
        cy
            .visit('/')
        cy
            .get('.common-nav-container')
            .get('.common-nav-res--lg')
            .find('[alt="Engels"]')
            .click()
        cy
            .url()
            .should('include', '/en')
    })
    it('should add an investement and check if its added to the portfolio', () => {
        portfolioNav()
        portfolio.investNow()
        portfolio.addAmount()
        portfolio.registration()
        portfolio.paymentMethod()
        portfolio.checkInvestement()

    })
    after('logout to try multiple login scenarios', () => {
       cy.logout()
    })
})
