export const portfolioNav = () => {
    cy
        .visit('/')
    cy
        .get('.common-nav-container')
        .find('#common-nav-btn--dropdown__BV_toggle_')
        .click()
    cy
        .get('ul[role="menu"]')
        .find('[aria-label="Portfolio"]')
        .click()
    cy
        .url()
        .should('include', '/account')
}