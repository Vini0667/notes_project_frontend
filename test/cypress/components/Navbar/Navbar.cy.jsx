import Navbar from "../../../../src/components/Navbar/Navbar";
import { mount } from "@cypress/react";
import navbarOptions from "../../../../src/dataMock/Navbar/NavbarMock";
import "../../../../src/index.css";

describe("Testing the Navbar responsiveness", () => {
    beforeEach(() => {
        mount(<Navbar />);
    });

    it("1. Testing in a larger screen", () => {
        cy.viewport(1280, 800);
        cy.get('[data-testid="desktop-nav-check"]').should("be.visible");
        cy.get('[data-testid="desktop-nav-check"]')
            .find("a")
            .should("have.length", navbarOptions.length)
            .and("be.visible");
        cy.get('[data-testid="hamburger-check"]').should("not.be.visible");
    });

    it("2. Testing in a small screen", () => {
        cy.viewport("iphone-6");

        cy.get('[data-testid="hamburger-check"]').should("be.visible");
        cy.get('[data-testid="desktop-nav-check"]').should("not.be.visible");
        cy.get("#mobile-menu")
            .should("have.class", "max-h-0")
            .and("have.class", "opacity-0");
    });

    it("3. Testing whether clicking the Hamburger button should switch between the mobile menu and the icon", () => {
        cy.viewport("iphone-6");

        cy.get('[data-testid="hamburger-check"]').should(
            "have.attr",
            "aria-expanded",
            "false",
        );

        cy.get('[data-testid="hamburger-check"]').click();

        cy.get("#mobile-menu")
            .should("have.class", "max-h-96")
            .and("have.class", "opacity-100");

        cy.get('[data-testid="hamburger-check"]').should(
            "have.attr",
            "aria-expanded",
            "true",
        );

        cy.get("#mobile-menu")
            .find("a")
            .should("have.length", navbarOptions.length)
            .and("be.visible");

        cy.get('[data-testid="hamburger-check"]').click();

        cy.get("#mobile-menu").should("have.class", "max-h-0");
        cy.get('[data-testid="hamburger-check"]').should(
            "have.attr",
            "aria-expanded",
            "false",
        );
    });

    it("4. Testing whether clicking in link the hamburger menu closes", () => {
        cy.viewport("iphone-6");

        cy.get('[data-testid="hamburger-check"]').click();
        cy.get("#mobile-menu")
            .find("a")
            .first()
            .then(($link) => {
                $link.removeAttr("href");
                cy.wrap($link).click();
            });

        cy.get("header").should("be.visible");

        cy.get('[data-testid="hamburger-check"]').should(
            "have.attr",
            "aria-expanded",
            "false",
        );

        cy.get("#mobile-menu").should("have.class", "max-h-0");
    });
});
