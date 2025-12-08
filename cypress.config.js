import { defineConfig } from "cypress";

export default defineConfig({
    projectId: "77v3mo",

    e2e: {
        baseUrl: "http://localhost:3000",
        setupNodeEvents(on, config) {
            require("@cypress/code-coverage/task")(on, config);
            return config;
        },
    },

    component: {
        devServer: {
            framework: "react",
            bundler: "vite",
        },
    },
});
