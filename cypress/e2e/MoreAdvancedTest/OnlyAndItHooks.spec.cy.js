//const { functions } = require("cypress/types/lodash")

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

  before (function(){
    //runs before all test inside describe
    //setup test data or test context
    //seed or reset database
    HomePage.loadHomePage()

  })
  after(function(){
     //runs after all test inside describe
     //test clean up or 
     //clean cookies or localstorage

  })

  beforeEach(function(){
   //runs before each it block all test in the describe 
  })

  afterEach(function(){
    //runs before each it block all test in the describe 
   })

    it.only('ist IT', () => {
        HomePage.scrollToBottom()
      HomePage.wait(3000)
      HomePage.scrollToTop()
      HomePage.wait(3000)
      
        })   
        it('2nd IT', () => {
          //easer to read than using cy.
          
            HomePage.scrollToBottom()
          HomePage.wait(3000)
          HomePage.scrollToTop()
          HomePage.wait(3000)
          
            })      
       
    })