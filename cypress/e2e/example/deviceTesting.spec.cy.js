describe('device testing', () => {
    it('720p', () => {
        cy.viewport(1280,720)
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.wait(2000)
        cy.title().should('include','Zero - Log in')
        

    })

 
    it('1000p', () => {
        cy.viewport(1980,1020)
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.wait(2000)
        
    })
  
    it('iPhone-x', () => {
        cy.viewport('iphone-x')
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.wait(2000)
    }) 
    it('Macbook-15', () => {
        cy.viewport('macbook-15')
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.wait(2000)
    }) 

})