import LinkedInPage from "../pages/homepage";

const testCases = [
  {
    description: 'Should validate that the email was not entered',
    email: '',
    password: '12345',
    expectedMessage: 'Please enter an email address or phone number.',
  },
  {
    description: 'Should validate that the password was not entered',
    email: 'example@example.com',
    password: '',
    expectedMessage: 'Please enter a password.',
  },
];

describe('LinkedIn Login Tests', () => {
  const linkedInPage = new LinkedInPage();

  testCases.forEach(({ description, email, password, expectedMessage }) => {
    it(description, () => {
      linkedInPage.visit();
      linkedInPage.clickSignIn();
      if (email) linkedInPage.fillEmail(email);
      if (password) linkedInPage.fillPassword(password);
      linkedInPage.clickLogin();
      cy.contains(expectedMessage).should('be.visible');
    });
  });
});

