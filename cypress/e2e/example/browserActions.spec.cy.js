describe('my first cypress test', () => {
    it('browser actions', () => {
        cy.visit('http://example.com/' ,{ timeout:10000})
        //cy.url().should('include','example.com')

    })

 it('should check correct url', () => {
        
        cy.url().should('include','example.com')

    })

    it('should wait for 3 seconds', () => {
        
        cy.wait(3000)

    })
    it('should pause the execution', () => {
        
       // cy.pause()

    })

    it('should check correct element on the page', () => {
        
        cy.get('h1').should('be.visible')

    })

})