import {Given,When,Then, And} from "cypress-cucumber-preprocessor/steps";
Given("open init login page",()=>{
    cy.visit("https://www.saucedemo.com/")})
   
   When("provide a valide user name and password",()=>{
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
   
   })
   
   Then("click on submit button",()=>{
       cy.get('#login-button').click()
   })
   