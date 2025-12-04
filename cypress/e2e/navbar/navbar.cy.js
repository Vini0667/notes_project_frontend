/// <reference path="../../../node_modules/cypress/types/index.d.ts" />

describe("Testing Navbar: Layout Desktop (768px+)", () => {
    beforeEach(() => {
        cy.viewport(1280, 800);
        cy.visit("/");
    });

    it("Should display logo and links, but hide the hamburger button", () => {
        cy.get(`[data-testid="nav-span-check"`).should(
            "contain",
            "React Notas",
        );

        cy.get(`[data-testid="desktop-nav-check"]`).should("be.visible");

        cy.get('[data-testid="theme-toggle"]').should("be.visible");

        cy.get(`[data-testid="hamburger-check"]`).should("not.be.visible");
    });
});

describe("Testing Navbar: Testing Iphone layout (Menu hamburger)", () => {
    beforeEach(() => {
        cy.viewport("iphone-x");
        cy.visit("/");
    });

    it("Should show the hamburger layout, icons and correctly close the menu", () => {
        cy.get('[data-testid="desktop-nav-check"]').should("not.be.visible");

        cy.get('[data-testid="hamburger-check"]').should("be.visible");
        cy.get("#mobile-menu").should("not.be.visible");

        cy.get('[data-testid="hamburger-check"]').click();
        cy.get("#mobile-menu").should("be.visible");

        const firstLinkInMenu = cy.get("#mobile-menu").find("a").eq(0);

        firstLinkInMenu.scrollIntoView().should("be.visible");

        cy.get('[data-testid="hamburger-check"]').should(
            "have.attr",
            "aria-expanded",
            "true",
        );

        firstLinkInMenu.click();

        cy.get("#mobile-menu").should("not.be.visible");
        cy.get('[data-testid="hamburger-check"]').should(
            "have.attr",
            "aria-expanded",
            "false",
        );
    });
});
