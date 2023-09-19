import {Given,When,Then, And} from "cypress-cucumber-preprocessor/steps";
Given("open init login page",()=>{
    cy.visit("https://www.saucedemo.com/")})
   
   When("provide a valide user name and password",()=>{
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
   
   })
   
   Then("click on submit button",()=>{
       cy.get('#login-button').click().wait(3000)
   })
   And("select the product",()=>{
    cy.get('#add-to-cart-sauce-labs-backpack').click().wait(3000)
})
And("select another product",()=>{
    cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click()
})
Then("select cart",()=>{
    cy.get('#shopping_cart_container > a').click().wait(3000)
})
Then("click on checkout",()=>{
    cy.get('#checkout').click()
     
})

   