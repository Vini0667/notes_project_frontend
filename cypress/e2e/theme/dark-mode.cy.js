/// <reference path="../../../node_modules/cypress/types/index.d.ts" />

describe("Testing Operational system behavior", () => {
    it("Testing should default theme in SO is dark", () => {
        cy.visit("/", {
            onBeforeLoad(win) {
                win.localStorage.clear();
                cy.stub(win, "matchMedia")
                    .withArgs("(prefers-color-scheme: dark)")
                    .returns({
                        matches: true,
                        addListener: () => {},
                        removeListener: () => {},
                    });
            },
        });

        cy.get("html").should("have.class", "dark");
    });

    it("Testing should default theme in SO is light", () => {
        cy.visit("/", {
            onBeforeLoad(win) {
                win.localStorage.clear();
                cy.stub(win, "matchMedia")
                    .withArgs("(prefers-color-scheme: dark)")
                    .returns({
                        matches: false,
                        addListener: () => {},
                        removeListener: () => {},
                    });
            },
        });

        cy.get("html").should("not.have.class", "dark");
    });
});

describe("Testing the Theme Toggle", () => {
    beforeEach(() => {
        cy.window().then((win) => {
            win.localStorage.setItem("theme", "light");
        });

        cy.visit("/");
    });

    it("should toggle theme from light to dark using test id", () => {
        const html = () => cy.get("html");

        html().should("not.have.class", "dark");

        cy.get('[data-testid="theme-toggle"]').click();

        html().should("have.class", "dark");

        cy.get('[data-testid="theme-toggle"]').click();
        html().should("not.have.class", "dark");
    });
});
