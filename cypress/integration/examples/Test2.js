
/// <reference types="Cypress" />

describe('My first Test Suite',function(){

    it('Sign up with new user',function() {
    
    cy.visit("https://www.demoblaze.com/")

    //clicking on Sign Up
    cy.get('#signin2').click()

    //sending username and password to respective box

    let username="ali-martin";
    let password="martin-7823";


    cy.wait(2000)
    cy.get('#sign-username').type(username)

    cy.get('#sign-password').type(password)
            //clicking sign up
    cy.get('button[type=button]').contains('Sign up').click()
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-header > .close > span').click()

    cy.get('#login2').click()

     cy.wait(2000)

        //login with the same username and password that created 
     cy.get('#loginusername').type(username)
     cy.get('#loginpassword').type(password)

     cy.get('button[type=button]').contains('Log in').click()

    
    })

    
    
    
    })