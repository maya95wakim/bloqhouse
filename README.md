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
<img width="1439" alt="Screenshot 2024-03-23 at 22 52 35" src="https://github.com/maya95wakim/bloqhouse/assets/46944139/603449d3-bcf3-4b52-90b8-f68dfc2845eb">

- Click on the lateset workflow run name
- Once the workflow is done you can check the test result by checking the "Start the test command" job step
 <img width="1436" alt="Screenshot 2024-03-23 at 22 56 46" src="https://github.com/maya95wakim/bloqhouse/assets/46944139/04b1fd02-01bd-4ecb-ac8c-efda13fe67be">
<img width="1440" alt="Screenshot 2024-03-23 at 22 57 01" src="https://github.com/maya95wakim/bloqhouse/assets/46944139/7d5a1139-11df-4d13-a7fb-aa7a1f12ef47">


- Alternatively, you can check the test artifact:
   - Click on the completed workflow
   - Download the artifact folder from the artifact section.
   - Once downloaded, open the "mochawesome.html" file to view detailed test results and the Cypress test code
   - And there is videos of the implementation
  <img width="1440" alt="Screenshot 2024-03-23 at 23 17 57" src="https://github.com/maya95wakim/bloqhouse/assets/46944139/fa220d28-f3ab-4371-ae1c-31b0c478702f">
  <img width="779" alt="Screenshot 2024-03-23 at 23 19 17" src="https://github.com/maya95wakim/bloqhouse/assets/46944139/8f149da4-3aa5-4341-81cf-bf0fc17e7bde">



