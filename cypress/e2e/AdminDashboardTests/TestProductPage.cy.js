describe('Test Product dashboard', () => {
    beforeEach(() => {
        // Call the custom login command
        cy.adminLogin();
        // cy.intercept({ resourceType: /xhr|fetch/},{ log: false});
    });

    xit('Review products in the dashboard', () => {
        cy.get(':nth-child(4) > :nth-child(1) > a > .v-list-item > .v-list-item__content > .v-list-item-title').should('have.text', 'Products').click()
        // Assert that the product table exists
        cy.get('.v-table__wrapper').should('exist');

        // Get all product rows in the table
        cy.get('.products > :nth-child(3)').each(($row, index, $rows) => {
            cy.wrap($row).within(() => {
                cy.get('td').each(function ($cellData, index, $columns) {
                    cy.log($cellData.text())
                })

            });
        });
    })
    //get the product brand of the 4th row
    xit('Get a single row data', () => {
        cy.get(':nth-child(4) > :nth-child(1) > a > .v-list-item > .v-list-item__content > .v-list-item-title').should('have.text', 'Products').click()
        cy.get(':nth-child(5) > :nth-child(3)').each(($cell) => {
            const cellValue = $cell.text();
            cy.log(cellValue);
        });


    })
    //Edit a product information in a table
    xit('Edit a product information in a table', () => {
        cy.get(':nth-child(4) > :nth-child(1) > a > .v-list-item > .v-list-item__content > .v-list-item-title').should('have.text', 'Products').click()
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('welcome');
        })
        cy.get(':nth-child(3) > :nth-child(6)').click()
        cy.get(':nth-child(3) > :nth-child(6) > .d-flex > :nth-child(1)').click()
        cy.get('.mdi-pencil').click()

        //Assert edit product window is opened
        cy.get('.font-weight-bold').should('contain', 'Product Image')

        //click product type
        cy.get('body > div.v-overlay-container > div > div.v-overlay__content > div > div > div > div > div.v-col.v-col-8 > div > div:nth-child(1) > div > div > div > div.v-field__append-inner > i').click()
        cy.get('body > div.v-overlay-container > div.v-overlay.v-overlay--absolute.v-overlay--active.v-theme--PetGreen.v-locale--is-ltr.v-menu > div > div > div:nth-child(2) > div.v-list-item__content > div').click()
        //Edit product name
        cy.get('body > div.v-overlay-container > div.v-overlay.v-overlay--active.v-theme--PetGreen.v-locale--is-ltr.v-dialog.v-overlay--scroll-blocked > div.v-overlay__content > div > div > div > div > div.v-col.v-col-8 > div > div:nth-child(2) > div > div > div')
            .clear().type('PetSafe')
        //Edit product price
        cy.get('body > div.v-overlay-container > div > div.v-overlay__content > div > div > div > div > div.v-col.v-col-8 > div > div:nth-child(4) > div > div > div')
            .clear().type('45.00')
        ///clear product description
        cy.get('#input-43').clear().type('The product is fantastic. I recommend the purchase')
        //Save the changes
        cy.get('body > div.v-overlay-container > div > div.v-overlay__content > div > div > div > div > div:nth-child(4) > div > button > span.v-btn__overlay').click({ force: true })

    })
    xit('Delete a product in a table ', () => {
        cy.get(':nth-child(4) > :nth-child(1) > a > .v-list-item > .v-list-item__content > .v-list-item-title').should('have.text', 'Products').click()
        cy.get(':nth-child(3) > :nth-child(6)').click()
        cy.get(':nth-child(4) > :nth-child(6) > .d-flex> :nth-child(1)').click()
        cy.get('.mdi-delete').click()
        cy.get("button[class='v-btn v-theme--PetGreen v-btn--density-default v-btn--size-default v-btn--variant-text text-error']").click()


    })
    xit('Test all data in a table', () => {
        cy.get(':nth-child(4) > :nth-child(1) > a > .v-list-item > .v-list-item__content > .v-list-item-title').should('have.text', 'Products').click()
        cy.wait(5000)
        cy.get('tbody>tr').each(($row) => {
            cy.wrap($row).find('td').each(($cell) => {
                const cellValue = $cell.text();
                cy.log(cellValue);
            });
        });

    })
    it.only('Print all product names', () => {
        cy.get(':nth-child(4) > :nth-child(1) > a > .v-list-item > .v-list-item__content > .v-list-item-title').should('have.text', 'Products').click()

        // Await url change
        cy.wait(5000)
        //Products descripton
        cy.get('tbody>tr>td:nth-child(2)').each(($cell) => {
            cy.log($cell.text());
        })

    })
})
