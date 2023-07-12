describe('Test Customer dashboard',()=>{
    before(() => {
        // Call the custom login command
        cy.adminLogin(); 
      });
    
      it('Add new customers',()=>{
      //  cy.viewport(1280, 720);
        //click customer button
     cy.get(':nth-child(3) > :nth-child(1) > a > .v-list-item > .v-list-item__content > .v-list-item-title').
        should('have.text','Customers').click()
       

      
        cy.get('.table-header__content > .v-btn').
        should('have.text', ' add new customer ').click()
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('welcome');
             })
        //Enter customer details
       cy.get('body > div.v-overlay-container > div > div.v-overlay__content > div > div > div > div > div:nth-child(2) > div').type('John')
       cy.get('body > div.v-overlay-container > div > div.v-overlay__content > div > div > div > div > div:nth-child(3) > div').type('Rob')
      cy.get('body > div.v-overlay-container > div > div.v-overlay__content > div > div > div > div > div:nth-child(4) > div').type('johnrob@yahoo.com')
      cy.get('body > div.v-overlay-container > div > div.v-overlay__content > div > div > div > div > div:nth-child(5) > div').type('0734567432')
      cy.get('body > div.v-overlay-container > div > div.v-overlay__content > div > div > div > div > div:nth-child(6) > div').type('Eldoret')
      cy.get('body > div.v-overlay-container > div > div.v-overlay__content > div > div > div > div > div:nth-child(7) > div').type('GF56782#')
      cy.get('body > div.v-overlay-container > div > div.v-overlay__content > div > div > div > div > div:nth-child(8) > div').type('GF56782#')
      cy.get('body > div.v-overlay-container > div > div.v-overlay__content > div > div > div > div > div:nth-child(9) > button').click({force:true})
      })
    })