describe('should load books url', () => {
    it('browser actions', () => {
        cy.visit('https://books.toscrape.com/index.html' ,{ timeout:10000})
        cy.url().should('include','index.html')
        cy.log('before  reload')
        cy.reload()
        cy.log('after reload')

    })




})