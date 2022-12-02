describe('write/read data to json /text file', () => {
    it('should write data into JSON', () => {
      cy.visit('https://devexpress.github.io/testcafe/example/')
      
      cy.writeFile('log.json',{name:"mike",age:25})
      
  
        })

        it('should write data into text file', () => {
          cy.visit('https://devexpress.github.io/testcafe/example/')
          
          cy.writeFile('log.txt',"hello mike")
          
      
            })

            it('should read and verifyu data JSON file', () => {
              cy.visit('https://devexpress.github.io/testcafe/example/')
              
              cy.readFile('log.json').its('age').should('eq',25)
              cy.readFile('log.json').its('name').should('eq',"mike")
              
          
                })

                it('should read and verify data text file', () => {
                  cy.visit('https://devexpress.github.io/testcafe/example/')
                  
                  cy.readFile('log.txt').should('eq',"hello mike")
                 
                  
              
                    })
           
       
    })