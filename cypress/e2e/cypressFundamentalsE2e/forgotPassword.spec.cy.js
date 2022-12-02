describe('password text', () => {

    before (function(){
        //runs before all test inside describe
        //setup test data or test context
        //seed or reset database
 cy.visit('http://zero.webappsecurity.com/index.html')
    
      })


    it('should click on sign in button ', () => {
        cy.get('#signin_button').click();

    })

    it('should click on forgot password', () => {
      cy.get('.offset3>a').click()

    })

    it('should fill email form', () => {
     cy.get('#user_email').type('abc@test.com')

    })
    it('should submit the  form', () => {
      cy.contains('Send Password').click()


    })

})