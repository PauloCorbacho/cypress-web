class LinkedInPage {

    get emailInput() {
      return '#username'; 
    }
  
    get passwordInput() {
      return '#password';
    }
  
    get loginButton() {
      return '.btn__primary--large'; 
    }


    get signIn(){
        return '.nav__button-secondary';
    }

    get errorNameMessage(){
        return '#error-for-username';
    }
  
    visit() {
      cy.visit('https://www.linkedin.com'); 
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
  }
  
  export default LinkedInPage;
  