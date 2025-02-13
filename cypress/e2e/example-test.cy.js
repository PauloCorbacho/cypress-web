import HomePageDemo from "../pages/homepage";

describe('Teste de Login', () => {
  const homePageDemo = new HomePageDemo();


  it('Deve visitar o link e preencher o formulário de login', () => {
    cy.visit('https://www.saucedemo.com/');

    cy.get('[data-test="username"]')
      .type('standard_user');  

      cy.get('[data-test="password"]')
      .type('secret_sauce');  

      cy.get('[data-test="login-button"]')
      .click();

    cy.url().should('include', '/inventory'); 
    cy.contains('Swag Labs'); 
    });


      it('Should add the product to cart', () => {
        cy.visit('https://www.saucedemo.com/');
        homePageDemo.doingLogin('standard_user','secret_sauce');  
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
          .click();  
    
        cy.get('.shopping_cart_badge')
          .contains('1'); 
      });

      it('Should add the correct value to cart', () => {
        cy.visit('https://www.saucedemo.com/');
        homePageDemo.doingLogin('standard_user','secret_sauce');  
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
          .click();   
       homePageDemo.openCart();
       homePageDemo.getValueFromCart().should('have.text', '$29.99')
      });

      it  ('Should remove the product from the cart', () => {
        cy.visit('https://www.saucedemo.com/');
        homePageDemo.doingLogin('standard_user','secret_sauce');  
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
          .click();   
       homePageDemo.openCart();
       cy.get('[data-test="remove-sauce-labs-backpack"]')
       .click();
       cy.get('.shopping_cart_badge')
       .should('not.exist');
      });
    });