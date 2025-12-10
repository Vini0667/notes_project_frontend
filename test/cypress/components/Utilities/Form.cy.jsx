import Form from "../../../../src/components/Utilities/Form";
import { mount } from "@cypress/react";

describe("Testing Form", () => {
    it("1. Testing if the form title is load", () => {
        const FORM_TITLE = "Test";

        mount(
            <Form formName={FORM_TITLE}>
                <>
                    <input
                        type="text"
                        placeholder="Campo de Teste"
                        data-testid="form-input"
                    />
                    <button type="submit" data-testid="form-submit-button">
                        Send
                    </button>
                </>
            </Form>,
        );

        cy.get("form").contains("h2", FORM_TITLE).should("be.visible");
        cy.get('[data-testid="form-input"]').should("exist");
        cy.get('[data-testid="form-submit-button"]').should("exist");
    });

    it("2. The function should be called onSubmit when the form is submitted", () => {
        const onSubmitStub = cy.stub();

        onSubmitStub.callsFake((event) => {
            if (event && typeof event.preventDefault === "function") {
                event.preventDefault();
            }
        });

        cy.wrap(onSubmitStub).as("onSubmitSpy");

        mount(
            <Form formName={"Test"} onSubmit={onSubmitStub}>
                <>
                    <button type="submit" data-testid="form-submit-button">
                        Send
                    </button>
                </>
            </Form>,
        );

        cy.get("form").submit();
        cy.get("@onSubmitSpy").should("have.been.calledOnce");
        cy.get("@onSubmitSpy").should("have.been.calledWithMatch", (event) => {
            return event && typeof event.preventDefault === "function";
        });
    });
});
