# Cypress Web Automation Project

## Project Overview
This project is designed to automate web application testing using **Cypress**, a modern end-to-end testing framework. It includes initial configurations, reusable Page Object Models (POM), and a set of test cases to validate login functionalities and error scenarios.

---

## Getting Started
Follow these steps to set up and run the project locally:

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- npm or yarn package manager
- Git

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd cypress-web
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

---

## Running Tests

### Open Cypress Test Runner
Run the following command to open the Cypress UI Test Runner:
```bash
npx cypress open
```

### Run Tests in Headless Mode
Execute the tests in headless mode:
```bash
npx cypress run
```

---

## Project Structure
```plaintext
cypress/
  e2e/
    linkedinLogin.cy.js     # Test cases for LinkedIn login validations
  pages/
    LinkedInPage.js         # Page Object Model for LinkedIn
  fixtures/                 # Test data (if applicable)
  support/
    commands.js             # Custom commands
    e2e.js                  # Cypress support file
cypress.config.js            # Cypress configuration file
```

---

## Contributing
1. Create a new branch for your feature/bugfix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. Commit your changes:
   ```bash
   git commit -m "feat: add new feature"
   ```
3. Push your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
4. Open a pull request on the repository.

---

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Contact
For questions or feedback, contact:
- **Paulo Corbacho*: [paulo.corbacho@hotmail.com]

