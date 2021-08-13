
/// <reference types="Cypress" />
describe('My first Test Suite',function(){

it('My FirstTest case',function() {

cy.visit("https://www.demoblaze.com/")

//count of categories
cy.get('.list-group').find('.list-group-item').should('have.length',4) 

//clicking on phones section
cy.get('.list-group').find('.list-group-item').contains('Phones').click()

//choosing Samsung galaxy s6
cy.get('.card-title').contains('Samsung galaxy s6').click().then(function(){

    //adding to cart
    cy.get('.col-sm-12 > .btn').click()
   
})
//getting model name printed
cy.get('.name').then(function(logoelement){
    // gsd
    cy.log(logoelement.text())
})

//clicking on Cart
cy.get('#cartur').click()

//verifiying if the added item is matching with the one on the Cart
cy.get('.success > :nth-child(2)').then(function(phoneModel){

    cy.log(phoneModel.text()).should('contain','Samsung galaxy s6')
})
})



})