describe('Test Customer dashboard',()=>{
    beforeEach(() => {
        // Call the custom login command
        cy.adminLogin(); 
      });
    
      it('Add new customers',()=>{
     
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
         //cancel the modal
         cy.get('body > div.v-overlay-container > div > div.v-overlay__content > div > div > div > div > div:nth-child(1) > div > div.d-flex.justify-space-between.mb-5 > span > i').click()
      })
      
      //Display all customer email address
      it("Display all customer emails",()=>{
        //click customer button
        cy.get(':nth-child(3) > :nth-child(1) > a > .v-list-item > .v-list-item__content > .v-list-item-title').
        should('have.text','Customers').click()
        cy.wait(5000)
        cy.get('tbody>tr>td:nth-child(2)').each(($cell) => {
            cy.log($cell.text());
        })
      }) 
       //display the address of the customer in the 3rd row
      it.only('Display the address of a customer',()=>{
        cy.get(':nth-child(3) > :nth-child(1) > a > .v-list-item > .v-list-item__content > .v-list-item-title').
        should('have.text','Customers').click()
        cy.get('tbody > :nth-child(3) > :nth-child(4)').each(($cell) => {
            const cellValue = $cell.text();
            cy.log(cellValue);
        });
      })
      
    });
    