class BasePage{

static loadHomePage(){
  cy.visit('https://devexpress.github.io/testcafe/example/')
}

static wait(number){
  cy.wait(number)

}

}

class HomePage extends BasePage{
  static scrollToBottom(){
    cy.get('#submit-button').scrollIntoView()
  }

  static scrollToTop(){
    cy.get('header').scrollIntoView()  
  }

}

describe('abstraction with classes', () => {
    it('should scroll down to end of pageN', () => {
      //easer to read than using cy.
      HomePage.loadHomePage()
        HomePage.scrollToBottom()
      HomePage.wait(3000)
      HomePage.scrollToTop()
      HomePage.wait(3000)
      
        })

        

           
           
       
    })