describe('working with input', () => {
    it('should fill username', () => {
        cy.visit('http://zero.webappsecurity.com/login.html',{ timeout:10000})
        cy.url().should('include','login.html')
        cy.get('#user_login').clear()
        cy.get('#user_login').type('some value',{delay: 10})
        //user_password

    })

 it('should fill password', () => {
        
    cy.get('#user_password').clear()
    cy.get('#user_password').type('some invalid password',{delay: 10})

    })

    it('should mark checkbox', () => {
        
        cy.get('#user_remember_me').click()
        cy.wait(5000)
    
        })

    it('should submit login button', () => {
       // cy.get('.btn.btn-primary').click()
        cy.contains('Sign in').click()
        
      //  cy.url().should('include','example.com')

    }) 
    it('should display error message', () => {
        
       cy.contains("Login and/or password are wrong.").should('be.visible')
       cy.get('.alert.alert-error').should('be.visible')

    }) 

})