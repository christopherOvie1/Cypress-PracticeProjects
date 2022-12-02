describe('should load books url', () => {
    it('browser actions', () => {
        cy.visit('https://books.toscrape.com/index.html' ,{ timeout:10000})
        cy.url().should('include','index.html')
        cy.log('website loaded')

    })

    it('should click on travel category', () => {
        cy.get('a')
        .contains('Travel')
        .click()

        cy.get('h1')
        .contains('Travel')

    })

    it('should display correct number of books', () => {
      
        cy.get('.product_pod')
        .its('length')
        .should('equal',11)
//Poetry
    })
//challenge to get poetry
    it('should click on poetry category', () => {
      
        cy.get('a')
        .contains('Poetry')
        .click()
        cy.get("img[alt='Olio']").click()
        cy.get('.price_color').contains('£23.88')
        

    })

})