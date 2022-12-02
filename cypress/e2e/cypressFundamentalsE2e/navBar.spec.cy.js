describe('header text nav', () => {

    before (function(){
        
 cy.visit('http://zero.webappsecurity.com/index.html')
    
      })


    it('should display online banking content', () => {
      //to check you on write page use path url
        cy.contains('Online Banking').click()
        cy.url().should('include','online-banking.html')
        cy.get('h1').should('be.visible')

    })

    it('should display feedback content', () => {
      cy.get("li[id='feedback'] strong").click()
      cy.url().should('include','feedback.html')
      cy.get('h3').should('be.visible')


    })

    it('should display homepage content', () => {
     cy.get('.container>a').click()
     cy.url().should('include','index.html')

    })

})