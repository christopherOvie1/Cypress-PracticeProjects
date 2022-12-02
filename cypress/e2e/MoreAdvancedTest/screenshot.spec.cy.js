describe('screenshots', () => {
    it('full page screenshots', () => {
        cy.visit('https://devexpress.github.io/testcafe/example/')
        cy.screenshot({ capture: 'fullPage'})
      
    })



    it('single element screenshots', () => {
        cy.visit('https://devexpress.github.io/testcafe/example/')
        cy.contains('Example').screenshot()
        cy.contains('Example').screenshot()
        cy.get('#populate').screenshot()
      
    })

        })