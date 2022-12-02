describe('keyboard press simulation', () => {
    it('should submit searchbox using alias', () => {
        cy.visit('http://zero.webappsecurity.com/' ,{ timeout:10000})
       // cy.get('#searchTerm').type('sssssssssss')

        cy.get('#searchTerm').as('searchButton')
        cy.get('@searchButton').clear()
        cy.get('@searchButton').type('vvvvvvv')

     

        })

        it('should submit searchbox pressing enter', () => {
            cy.visit('http://zero.webappsecurity.com/' ,{ timeout:10000})
           // cy.get('#searchTerm').type('sssssssssss')
    
            cy.get('#searchTerm').as('searchButton')
            cy.get('@searchButton').clear()
            cy.get('@searchButton').type('just some text {enter}')
    
         
    
            })

    })