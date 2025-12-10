import Main from "../../../../src/components/Utilities/Main";
import { mount } from "@cypress/react";
import "../../../../src/index.css";

describe("Testing the rendering main", () => {
    it("1. Testing if Main should be mounted", () => {
        mount(<Main />);

        cy.get("main").should("exist").and("have.class", "max-w-7xl");
    });

    it("2. Should be able to render some content", () => {
        const TEST_MESSAGE = "Hello";

        mount(
            <Main>
                <h1>{TEST_MESSAGE}</h1>
            </Main>,
        );

        cy.get("main").contains("h1", TEST_MESSAGE).should("be.visible");
    });
});
