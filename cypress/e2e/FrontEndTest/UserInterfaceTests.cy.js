

describe('Ecommerce website', () => {
  beforeEach(() => {
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
    
    it('Filter products based on brands' ,()=>{
       //click the product category
      cy.get(':nth-child(3) > .section-title').click({force:true})
      cy.get(':nth-child(2) > .accordion__body > ul > :nth-child(4)').click()
      cy.get('.product-card__title').each(($product) => {
      const productName = $product.text();
      cy.log(productName);
              
      });
    })

      //Filter the products based on the category
    it('Filter products based on Category',()=>{
        cy.get(':nth-child(3) > .section-title').click({force: true})
        cy.wait(1000)
        cy.get(':nth-child(3) > .accordion__body > ul > :nth-child(2)').click()

        cy.get('.product-card__title').each(($product, index) => {
          cy.wrap($product).invoke('text').then((productName) => {
            cy.log(`Product ${index + 1}: ${productName}`);//print all products
            expect(productName).to.not.be.empty; // Assertion to check product name is not empty
    
          
        });
      })
    })
     it('Search products',()=>{
      cy.get('#input-4').type(' Fresh Step Scented{enter}')
      cy.get('.v-list-item').click()
      cy.get('#__nuxt > div > div > nav > main > div > div > div > div > div.v-col.v-col-5 > div > p.product__title')
      .should('have.text','Fresh Step Scented Litter with The Power of Febreze, Clumping Cat Litter')

     })
    //The script randomly add to cart an item
    it('add a single product to cart randomly',()=>{
     
           cy.get('.product-card__title').then(($el) => {

                let i = Math.floor(Math.random() * ($el.toArray()).length)               
                cy.get($el.toArray()[i]).click()
                cy.get('.product__actions-wrapper > .v-btn').click()

                //click cart
                cy.get('.v-toolbar__content > .v-container > :nth-child(3) > :nth-child(1)').
                should('have.text', ' Cart (1) ').click()

                //verify the cart page
                cy.url().should('eq','https://pet-shop.buckhill.com.hr/cart')

                //proceed to checkout
               cy.get('.v-btn--elevated').should('have.text', ' Proceed to checkout ').click()

               //Verify the checkout page
               cy.url().should('eq','https://pet-shop.buckhill.com.hr/checkout')
                // Assert checkout page
               cy.contains('Checkout')
               .should('be.visible')
               .then(() => {
               cy.contains('Shipping address').should('be.visible');
                  });

                  cy.wait(5000)
                  //enter customer infomation
                  //Enter username
                  cy.get('#input-39').type('John')
                  cy.get('#input-41').type('Doe')
                  //enter Address
                  cy.get('#input-43').type('Street 45')
                  cy.get('#input-45').type('North 34')
                  cy.get('#input-47').type('Nakuru')
                  cy.get('#input-49').type('Monrovia')
                  cy.get('#input-51').type('6000')
                  cy.get('#input-53').type('Kenya')

                  //click Next button
                  cy.get('.action-btns > .v-btn').should('have.text',' Next ').click()
                  //select the type of payment as cash on dilevery
                  cy.get(':nth-child(2) > .v-card').click()
                  cy.contains('Cash on delivery').should('be.visible')
                  cy.get('#input-85').type('John')
                  cy.get('#input-87').type('Doe')
                  cy.get('#input-89').type('Street 45')
                  cy.get('#input-91').type('0714597899')
                  //click checkbox
                  cy.get('#checkbox-93').click()
                  cy.get('.primary500').click()

                  // Review your order page
                  cy.url().should('eq','https://pet-shop.buckhill.com.hr/checkout')
                  cy.get('h3.text-h6').should('have.text','Review your order')

                //Place an order
                cy.get('.action-btns > .v-btn').click()
        })
    })
   
  })

