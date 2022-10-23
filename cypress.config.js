const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  reporter: "mochawesome",

  reporterOptions: {
    reportDir: "cypress/results",
    overwrite: false,
    html: false,
    json: true,

    e2e: {
      baseUrl: `https://uk.castoredc.com`,
      // const x = ('https://uk.castoredc.com/')
      setupNodeEvents(on, config) {
        // implement node event listeners here
      },
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
