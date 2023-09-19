Feature: sauce validation

Scenario: sauce demo
Given    open init login page
When     provide a valide user name and password
Then     click on submit button 
And      select the product 
And      select another product 
Then     select cart 
Then     click on checkout
Then     type first name 
Then     type last name 
Then     type zip code 
Then     click on continue
Then     click on finish
Then     click on backhome
