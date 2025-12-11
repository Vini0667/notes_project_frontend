import FormButton from "../../../../src/components/Utilities/FormButton";
import { mount } from "@cypress/react";
import "../../../../src/index.css";

describe("Testing the form button", () => {
    const TEST_TEXT = "test";

    it("1. Should render the text and have the type ‘submit’ by default", () => {
        mount(<FormButton>{TEST_TEXT}</FormButton>);

        cy.contains("button", TEST_TEXT).should("be.visible");
        cy.get("button").should("have.attr", "type", "submit");
        cy.get("button")
            .should("have.class", "w-full")
            .and("have.class", "bg-indigo-600");
    });

    it("2. Should trigger the onClick function when clicked and accept custom 'type'", () => {
        const onClickSpy = cy.spy().as("onClickSpy");

        mount(
            <FormButton type="button" onClick={onClickSpy}>
                {TEST_TEXT}
            </FormButton>,
        );

        cy.get("button").should("have.attr", "type", "button");
        cy.get("button").click();
        cy.get("@onClickSpy").should("have.been.calledOnce");
    });

    it("3. Should receive additional props", () => {
        const props = {
            id: 1,
            "data-testid": TEST_TEXT,
            disabled: true,
        };

        mount(<FormButton {...props}> {TEST_TEXT} </FormButton>);

        cy.get(`[data-testid="${TEST_TEXT}"]`).should("exist");
        cy.get("button").should("be.disabled");
    });
});
