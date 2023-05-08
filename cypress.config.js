const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "jim8oa",
  e2e: {
    baseUrl: "http://localhost:3000",
    experimentalRunAllSpecs: true,
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/e2e.{js,jsx,ts,tsx}",
    fileServerFolder: "cypress/integration",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
