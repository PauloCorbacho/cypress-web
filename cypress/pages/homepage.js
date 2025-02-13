class HomePageDemo {

    get emailInput() {
      return '[data-test="username"]'; 
    }
  
    get passwordInput() {
      return '[data-test="password"]';
    }
  
    get loginButton() {
      return '[data-test="login-button"]'; 
    }


    get signIn(){
        return '.nav__button-secondary';
    }

    get errorNameMessage(){
        return '#error-for-username';
    }
  
    visit() {
      cy.visit('https://www.saucedemo.com/'); 
    }

    clickSignIn() {
        cy.get(this.signIn).click();
    }
  
    fillEmail(email) {
      cy.get(this.emailInput).type(email); 
    }
  
    fillPassword(password) {
      cy.get(this.passwordInput).type(password); 
    }
  
    clickLogin() {
      cy.get(this.loginButton).click(); 
    }

    openCart(){
        cy.get('.shopping_cart_link').click();
    }

    getValueFromCart(){
        return cy.get('[data-test="inventory-item-price"]')
    }

    doingLogin(email, password){
        this.fillEmail(email);
        this.fillPassword(password);
        this.clickLogin();
    }
  }
  
  export default HomePageDemo;
  