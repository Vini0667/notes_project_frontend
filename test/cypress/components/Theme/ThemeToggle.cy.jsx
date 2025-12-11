import { mount } from "@cypress/react";
import ThemeToggle from "../../../../src/components/ThemeToggle/ThemeToggle";
import "../../../../src/index.css";

describe("ThemeToggle component test", () => {
    beforeEach(() => {
        cy.window().then((win) => {
            win.localStorage.clear();
            win.document.documentElement.classList.remove("dark");
        });
        cy.clearLocalStorage();
    });

    it("1. Check if the button appears", () => {
        mount(<ThemeToggle />);
        cy.get("#theme-toggle").should("be.visible");
    });

    it("2. Initialize in light mode test, if no localStore is set and system prefer light mode", () => {
        // SO Light mode
        cy.stub(window, "matchMedia")
            .withArgs("(prefers-color-scheme: dark)")
            .returns({
                matches: false,
                addListener: cy.stub(),
                removeListener: cy.stub(),
            })
            .as("matchMediaStub");

        mount(<ThemeToggle />);

        cy.get("#theme-toggle")
            .find("svg")
            .should("have.attr", "data-icon", "dark-mode");

        cy.document().its("documentElement").should("not.have.class", "dark");
        cy.window()
            .its("localStorage")
            .invoke("getItem", "theme")
            .should("equal", "light");
    });

    it("3. Initialize in dark mode test, if no localStore is set and system prefere dark mode", () => {
        // SO Dark mode
        cy.stub(window, "matchMedia")
            .withArgs("(prefers-color-scheme: dark)")
            .returns({
                matches: true,
                addListener: cy.stub(),
                removeListener: cy.stub(),
            })
            .as("matchMediaStub");
        mount(<ThemeToggle />);
        cy.get("#theme-toggle")
            .find("svg")
            .should("have.attr", "data-icon", "light-mode");
        cy.document().its("documentElement").should("have.class", "dark");
        cy.window()
            .its("localStorage")
            .invoke("getItem", "theme")
            .should("equal", "dark");
    });

    it("4. The color should to change when the button is clicked", () => {
        // SO Light mode
        cy.stub(window, "matchMedia")
            .withArgs("(prefers-color-scheme: dark)")
            .returns({
                matches: false,
                addListener: cy.stub(),
                removeListener: cy.stub(),
            })
            .as("matchMediaStub");

        mount(<ThemeToggle />);

        cy.get("#theme-toggle").click();
        cy.get('[data-icon="light-mode"]').should("be.visible");
        cy.get("html").should("have.class", "dark");

        cy.get("#theme-toggle").click();
        cy.get("html").should("not.have.class", "dark");
        cy.get('[data-icon="dark-mode"]').should("be.visible");
    });

    it("5. Initialize theme by localStorage selector", () => {
        // Dark mode in localStorage
        cy.window().then((win) => {
            win.localStorage.setItem("theme", "dark");
        });

        // SO Light mode
        cy.stub(window, "matchMedia")
            .withArgs("(prefers-color-scheme: dark)")
            .returns({
                matches: false,
                addListener: cy.stub(),
                removeListener: cy.stub(),
            });

        mount(<ThemeToggle />);

        cy.get("#theme-toggle")
            .find("svg")
            .should("have.attr", "data-icon", "light-mode");

        cy.document().its("documentElement").should("have.class", "dark");

        cy.window()
            .its("localStorage")
            .invoke("getItem", "theme")
            .should("equal", "dark");
    });
});
