describe('Test Product dashboard',()=>{
    before(() => {
        // Call the custom login command
        cy.adminLogin(); 
      });
it('Add product test',()=>{
       cy.get(':nth-child(4) > :nth-child(1) > a > .v-list-item > .v-list-item__content > .v-list-item-title').should('have.text','Products').click()
      //  cy.get('.table-header__content > .v-btn').should('have.text',' add new product ').click()
       // cy.get(':nth-child(4) > :nth-child(1) > a > .v-list-item > .v-list-item__content > .v-list-item-title').click({force:true})
       
       // cy.get('.table-header__content > .v-btn > .v-btn__content').click()
})

it('Review products in the dashboard',()=>{
cy.get(':nth-child(4) > :nth-child(1) > a > .v-list-item > .v-list-item__content > .v-list-item-title').should('have.text','Products').click()
    // Assert that the product table exists
    cy.get('.v-table__wrapper').should('exist');

    // Get all product rows in the table
    cy.get('.products > :nth-child(2)').each(($row, index,$rows) => {
      cy.wrap($row).within(() => {
       cy.get('td').each(function($cellData,index,$columns){
        cy.log($cellData.text())
       })
       
      });
    });
})
 it('Get a single row data',()=>{
    cy.get(':nth-child(4) > :nth-child(1) > a > .v-list-item > .v-list-item__content > .v-list-item-title').should('have.text','Products').click()
    cy.get('tbody>tr').first()
    .within(function(){
        cy.get('td').eq(1).should('contain.text','Shout for Pets Odor and Urine Eliminator - Effective Way to Remove Puppy & Dog Odors and Stains from Carpets & Rugs')
    })

    //assert a product to be visible in a row
    cy.get('tbody > :nth-child(3) > :nth-child(2)').
    contains('Fresh Wave Odor Removing Gel, 15 oz. (Pack of 2)').should('be.visible')
 })
 it.only('Edit a product description in a table',()=>{
    cy.get(':nth-child(4) > :nth-child(1) > a > .v-list-item > .v-list-item__content > .v-list-item-title').should('have.text','Products').click()
    cy.window().then((win)=>{
        cy.stub(win,'prompt').returns('welcome');
    })
    cy.get(':nth-child(3) > :nth-child(6)').click()
    cy.get(':nth-child(3) > :nth-child(6) > .d-flex > :nth-child(1)').click()
    cy.get('.mdi-pencil').click()
    
    //////
    cy.get('body > div.v-overlay-container > div > div.v-overlay__content > div > div > div > div > div.v-col.v-col-8 > div > div:nth-child(1) > div > div > div > div.v-field__append-inner > i').click()
    
    
    ///clear product description
    cy.get('#input-43').clear().type('The product is fantastic. I recommend the purchase')
    
    cy.get('body > div.v-overlay-container > div > div.v-overlay__content > div > div > div > div > div:nth-child(4) > div > button > span.v-btn__overlay').click({force: true})
   
 })
 it('Delete a product in a table ',()=>{
    cy.get(':nth-child(4) > :nth-child(1) > a > .v-list-item > .v-list-item__content > .v-list-item-title').should('have.text','Products').click()
    cy.get(':nth-child(3) > :nth-child(6)').click()
    cy.get(':nth-child(4) > :nth-child(6) > .d-flex> :nth-child(1)').click()
    cy.get('.mdi-delete').click()
    cy.get("button[class='v-btn v-theme--PetGreen v-btn--density-default v-btn--size-default v-btn--variant-text text-error']").click()


 })

})
