describe('feedback test', () => {

    before (function(){
        
 cy.visit('http://zero.webappsecurity.com/index.html')
 cy.contains('Feedback').click()
    
      })


    it('should load feedback form', () => {
      cy.url().should('contain','feedback.html')
      cy.get('form').should('be.visible')
      

    })

    it('should fill feedback form', () => {
      cy.get('#name').type('ffffffff')
      cy.get('#email').type('email@email.com')
      cy.get('#subject').type('just subject')
      cy.get('#comment').type('just comment')

    })

    it('should submit feedback form', () => {
      cy.get('.btn-signin').click()

    })

    it('should didplay feedback message', () => {
  cy.get('#feedback-title').contains('Feedback')

    })

})