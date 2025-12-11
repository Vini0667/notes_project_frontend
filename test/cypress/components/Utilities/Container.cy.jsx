import { mount } from "@cypress/react";
import Container from "../../../../src/components/Utilities/Container";
import "../../../../src/index.css";

describe("Container Component Test", () => {
    beforeEach(() => {
        cy.window().then((win) => {
            win.document.documentElement.classList.remove("dark");
        });
    });

    const TEST_CONTENT = "Test";

    it("1. Should render the nested content and apply the light mode", () => {
        mount(
            <Container>
                <h1>{TEST_CONTENT}</h1>
            </Container>,
        );

        cy.contains("h1", TEST_CONTENT).should("be.visible");
        cy.get("#container")
            .should("have.class", "min-h-screen")
            .and("have.class", "bg-gray-50")
            .and("have.class", "transition-colors");
    });

    it("2. The dark mode class should be applied when the dark mode is enabled in HTML.", () => {
        cy.window().then((win) => {
            win.document.documentElement.classList.add("dark");
        });

        mount(
            <Container>
                <h1>{TEST_CONTENT}</h1>
            </Container>,
        );

        cy.contains("h1", TEST_CONTENT).should("be.visible");
        cy.get("#container").should("have.class", "dark:bg-gray-900");
        cy.get("#container").should("have.class", "bg-gray-50");
    });
});
