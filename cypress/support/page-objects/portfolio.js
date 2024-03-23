
const investName = "Test Fund"
const addedAmount = 500
const formattedAmount = '€ 501'
export class Portfolio {
    investNow() {
            if (Cypress.$(cy.get('.dashboard-load').find('button')).length > 0) {
                cy
                    .get('.dashboard-load')
                    .find('button')
                    .click()
            }
        cy
            .contains('.funds-list-wrapper',investName)
            .find('button[role="link"]')
            .click()
        cy
            .url()
            .should('contains', '/investment')
    }
    addAmount() {
        cy
            .get('#assetEuro')
            .find('input[name="euro"]')
            .click()
            .clear()
            .type(addedAmount)
            .type('{enter}')
            .invoke('prop', '_value')
            .should('equal', addedAmount)
        cy
            .get('#assetEuro')
            .find('button')
            .then(result => {
                cy
                    .wrap(result)
                    .first()
                    .should('be.enabled')
                cy
                    .wrap(result)
                    .eq(1)
                    .click()
            })
        cy
            .get('#assetEuro')
            .find('input[name="euro"]')
            .invoke('prop', '_value')
            .should('equal', addedAmount + 1)
        cy
            .get('[class="card shadow-sm"]')
            .get('nav')
            .find('[data-testid="checkoutFlowNextStepButton"]')
            .click()
        cy
            .url()
            .should('contains', '/legal/')

    }
    registration() {
        cy
            .get('[class="footer-checkout"]')
            .find('button')
            .should('be.disabled')

        cy
            .get('[class="legal-wrapper card shadow-sm"]')
            .find('input[type="checkbox"]')
            .check()

        cy
            .get('[class="footer-checkout"]')
            .find('button')
            .then(result => {
                cy
                    .wrap(result)
                    .should('be.enabled')
                cy
                    .wrap(result)
                    .click()
            })

        cy
            .url()
            .should('contains', 'payment-methods')
    }
    paymentMethod() {
        cy
            .get('[class="footer-checkout"]')
            .find('button')
            .should('be.disabled')
        cy
            .get('[class="payment-methods"]')
            .find('input[type="radio"]')
            .check()
        cy
            .get('[class="footer-checkout"]')
            .find('button')
            .click()
    }
    checkInvestement() {
        cy
            .visit('/account')
        cy
            .url()
            .should('contains', '/account')
        cy
            .contains('#i_2',investName)
            .find('.transactions-item-show')
            .click()
        cy
            .get('.transactions-item-pay-list')
            .first()
            .get('.transactions-item-pay-amount')
            .eq(4)
            .find('strong')
            .invoke('text')
            .then(amount => {
                expect(amount).to.equal(formattedAmount)
            })
    }
}
export const portfolio = new Portfolio()
