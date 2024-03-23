const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://fortus-bloqify-staging.firebaseapp.com',
    specPattern: 'cypress/e2e/*.{js,jsx,ts,tsx}',
    testIsolation: false,
  },
  video: true,
  // retries:1,
  reporter: 'mochawesome',
  reporterOptions: {
    overwrite: false,
    html: false,
    json: true
  },
});