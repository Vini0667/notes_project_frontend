import { defineConfig } from "cypress";

export default defineConfig({
    projectId: "77v3mo",
    screenshotsFolder: "test/cypress/screenshots",

    e2e: {
        baseUrl: "http://localhost:3000",
        setupNodeEvents(on, config) {
            require("@cypress/code-coverage/task")(on, config);
            return config;
        },
        specPattern: "test/cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
        supportFile: "test/cypress/support/e2e.js",
        downloadsFolder: "test/cypress/downloads",
    },

    component: {
        devServer: {
            framework: "react",
            bundler: "vite",
        },
        specPattern: "test/cypress/components/**/*.cy.{js,jsx,ts,tsx}",
        supportFile: "test/cypress/support/component.js",
        downloadsFolder: "test/cypress/downloads",
        indexHtmlFile: "test/cypress/support/component-index.html",
        setupNodeEvents(on, config) {
            require("@cypress/code-coverage/task")(on, config);
            return config;
        },
    },
});
