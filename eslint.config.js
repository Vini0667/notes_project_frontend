import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import cypress from "eslint-plugin-cypress"; // Plugin do Cypress
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
    globalIgnores(["dist"]),

    // ----------------------------------------------------
    // BLOCO 1: Configuração Base da Aplicação (Produção)
    // ----------------------------------------------------
    {
        files: ["**/*.{js,jsx}"],
        ignores: ["cypress/**/*"],
        extends: [
            js.configs.recommended,
            reactHooks.configs.flat.recommended,
            reactRefresh.configs.vite,
        ],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: {
                ecmaVersion: "latest",
                ecmaFeatures: { jsx: true },
                sourceType: "module",
            },
        },
        rules: {
            "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
        },
    },

    // ----------------------------------------------------
    // BLOCO 2: Configuração Exclusiva para Testes Cypress
    // ----------------------------------------------------
    {
        files: ["cypress/e2e/**/*.{js,jsx}"],

        extends: [cypress.configs.recommended],

        plugins: {
            cypress: cypress,
        },

        languageOptions: {
            globals: {
                ...globals.browser,
                ...cypress.environments.globals.globals,
            },
        },
    },
]);
