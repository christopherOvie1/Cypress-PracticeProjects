describe('search', () => {

    before (function(){
        //runs before all test inside describe
        //setup test data or test context
        //seed or reset database
 cy.visit('http://zero.webappsecurity.com/index.html')
    
      })


    it('should type into searchBox and submit by pressing enter', () => {
        cy.get('#searchTerm').type('some text {enter}')

    })

    it('should type into searchBox and submit by pressing enter', () => {
      cy.get('h2').contains('Search Results')

    })

})