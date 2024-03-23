# bloqhouse

## Automation Test Suite: GoRest User CRUD APIs using NodeJS and Cypress.

###  Implementation
- The test code can be found under /cypress/e2e/login.js & /cypress/e2e/investment.js
- In login.js, I implemented multiple groups of tests
  - Successfull login flow with the valid credintials
  - Negative tests: login with invalid username with checking the verification message & login with invalid password with checking the error message.
- In investment.js, I implemented a full flow test for invesment:
  - Login and create a session
  - Change the language to english
  - Open the portfolio page and check that it loaded
  - Click on invest now and check if the investment page is open
  - Add an investment amount by typing the amount in the input field & change it using the increase/decrease buttons and confirm the amount
  - Confirm the registration check button & check if the confirm button is disabled before accept the registration and enabled after
  - Choose the payment method, check if the confirm button is disabled before accept the registration and enabled & confirm it
  - Go back to the Dashboard page and check if the investment has been added with the right amount


### Run the tests
- The test is linked to a GitHub Action that could be triggered by pushing new commits to the master branch.
- Additionally, this workflow could be triggered manually by:
   - Go to "Actions" in github
   - Choose the "Run Cypress test" from the workflow side menu
   - Click on "Run workflow"


- Click on the lateset workflow run name
- Once the workflow is done you can check the test result by checking the "Start the test command" job step
 

- Alternatively, you can check the test artifact:
   - Click on the completed workflow
   - Download the artifact folder from the artifact section.
   - Once downloaded, open the "mochawesome.html" file to view detailed test results and the Cypress test code
   - And there is videos of the implementation
  

