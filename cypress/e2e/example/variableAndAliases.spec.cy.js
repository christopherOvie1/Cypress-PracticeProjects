describe('working with input', () => {


    it('should overide correct time', () => {
     
        const date= new Date(2022, 30,11).getTime()
        cy.clock(date)
        cy.log(date)
    
        })

    it('should fill username', () => {

        
        cy.visit('http://zero.webappsecurity.com/login.html',{ timeout:10000})

        cy.title().should('include','Zero - Log in')

        cy.clearCookies({log:true})
        cy.clearLocalStorage('your item',{log:true})
        cy.url().should('include','login.html')
        cy.get('#user_login').as('username')
        cy.get('@username').clear()
        cy.get('@username').type('some value',{delay: 10})
        //user_password

    })

 it('should fill password', () => {
     
    cy.get('#user_password').as('password')
    cy.get('@password').clear()
    cy.get('@password').type('some invalid password',{delay: 10})

    })

    it('should mark checkbox', () => {
        
        cy.get('#user_remember_me').click()
        //cy.wait(1000)
    
        })

    it('should submit login button', () => {
       // cy.get('.btn.btn-primary').click()
        cy.contains('Sign in').click()
        
      //  cy.url().should('include','example.com')

    }) 
    //chain assertions
    it('should display error message', () => {
        
       cy.contains("Login and/or password are wrong.").should('be.visible')
       cy.get('.alert.alert-error').should('be.visible').and('contain','Login and/or password are wrong.')

    }) 

})