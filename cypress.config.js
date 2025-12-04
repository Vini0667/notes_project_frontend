import { defineConfig } from "cypress";

export default defineConfig({
    projectId: "77v3mo",

    e2e: {
        baseUrl: "http://localhost:3000",
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },

    component: {
        devServer: {
            framework: "react",
            bundler: "vite",
        },
    },
});
