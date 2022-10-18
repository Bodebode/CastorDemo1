const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: `https://uk.castoredc.com`,
    // const x = ('https://uk.castoredc.com/')
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
