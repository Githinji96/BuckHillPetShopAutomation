

describe('User journey test', () => {
  before(() => {
    // Call the custom login command
    cy.login(); 
  });
  //display items and prices
  it('display of items on home page', () => {
  
    cy.get('.v-slide-group__content')
        .each((product, index) => {
          // Access and print details of each product
          cy.wrap(product)
            .find('.product-card__title')
            .invoke('text')
            .then((title) => {
              cy.log(`Item ${index + 1}: ${title}`);
            });
    
          cy.wrap(product)
            .find('.product-card__price') 
            .invoke('text')
            .then((price) => {
              cy.log(`Price: ${price}`);
            });
  
        });
    });
    
    it('filter products on lowest price first' ,()=>{
            
    })

    //The script randomly chooses and add to cart an item
    it('add a single product to cart',()=>{
     
           cy.get('.product-card__title').then(($el) => {

                let i = Math.floor(Math.random() * ($el.toArray()).length)               
                cy.get($el.toArray()[i]).click()
                cy.get('.product__actions-wrapper > .v-btn').click()

                //click cart
                cy.get('.v-toolbar__content > .v-container > :nth-child(3) > :nth-child(1)').
                should('have.text', ' Cart (1) ').click()

                //proceed to checkout
               cy.get('.v-btn--elevated').should('have.text', ' Proceed to checkout ').click()
                // Assert checkout page
               cy.contains('Checkout')
               .should('be.visible')
               .then(() => {
               cy.contains('Shipping address').should('be.visible');
                  });
                  //enter customer infomation
                  //Enter username
                  cy.get('#input-45').type('John')
                  cy.get('#input-47').type('Doe')
                  //enter Address
                  cy.get('#input-49').type('0745567890')
                  cy.get('#input-51').type('0714597899')
                  cy.get('#input-53').type('Nakuru')
                  cy.get('#input-55').type('Monrovia')
                  cy.get('#input-57').type('6000')
                  cy.get('#input-59').type('Kenya')
                 // click the checkbox
                  cy.get('#checkbox-61').click()
                  //click Next button
                  cy.get('.action-btns > .v-btn').should('have.text',' Next ').click()
                  //select the type of payment as cash on dilevery
                  cy.get(':nth-child(2) > .v-card').click()
                  cy.contains('Cash on delivery').should('be.visible')
                  cy.get('#input-91').type('John')
                  cy.get('#input-93').type('Doe')
                  cy.get('#input-95').type('0745567890')
                  cy.get('#input-97').type('0714597899')
                  //click checkbox
                  cy.get('#checkbox-99').click()
                  cy.get('.primary500').click()

                //Place an order
                cy.get('.action-btns > .v-btn').click()
        })
    })
  })
