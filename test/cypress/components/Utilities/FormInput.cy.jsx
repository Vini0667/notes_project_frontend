import React, { useState } from "react";
import FormInput from "../../../../src/components/Utilities/FormInput";
import { mount } from "@cypress/react";
import "../../../../src/index.css";

describe("Testing Form Input", () => {
    const INPUT_OPTIONS = {
        label: "label test",
        id: "test",
        placeholder: "test",
        value: "123",
        type: "number",
    };

    it("1. Should render label and input with id association, and type='text' default", () => {
        mount(
            <FormInput
                label={INPUT_OPTIONS.label}
                id={INPUT_OPTIONS.id}
                placeholder={INPUT_OPTIONS.placeholder}
            />,
        );

        cy.get("label")
            .should("be.visible")
            .and("have.text", INPUT_OPTIONS.label)
            .and("have.attr", "for", INPUT_OPTIONS.id);

        cy.get("input")
            .should("be.visible")
            .and("have.attr", "id", INPUT_OPTIONS.id)
            .and("have.attr", "type", "text")
            .and("have.attr", "placeholder", INPUT_OPTIONS.placeholder);
    });

    it("2. Should apply different type of type", () => {
        mount(<FormInput {...INPUT_OPTIONS} />);

        cy.get("input")
            .should("be.visible")
            .and("have.attr", "type", INPUT_OPTIONS.type);

        cy.get("input").should("have.value", INPUT_OPTIONS.value);
    });

    it("3. Should fire onChange and update the value when typing", () => {
        const onChangeSpy = cy.spy();
        cy.wrap(onChangeSpy).as("onChangeSpy");
        const NEW_TEXT = "texto";

        const ControlledInputTest = () => {
            const [value, setValue] = useState("");

            const handleChange = (e) => {
                setValue(e.target.value);
                onChangeSpy(e);
            };

            return (
                <FormInput
                    label={INPUT_OPTIONS.label}
                    id={INPUT_OPTIONS.id}
                    value={value}
                    onChange={handleChange}
                />
            );
        };
        mount(<ControlledInputTest />);

        cy.get("input").type(NEW_TEXT);
        cy.get("input").should("have.value", NEW_TEXT);

        cy.get("@onChangeSpy").should("have.been.called");
        cy.get("@onChangeSpy").should("have.callCount", NEW_TEXT.length);
    });

    it("4. Should apply additional props", () => {
        mount(
            <FormInput
                {...INPUT_OPTIONS}
                data-testid="test"
                data-something="something"
                name="testing"
                readOnly
            />,
        );

        cy.get('[data-testid="test"]').should("exist");
        cy.get('[data-something="something"]').should("be.visible");
        cy.get("input").should("have.attr", "name", "testing");
        cy.get("input").should("have.attr", "readOnly");
    });

    it("5. Should show the error message", () => {
        const errorMessage = "error";

        mount(<FormInput {...INPUT_OPTIONS} error={errorMessage} />);

        cy.get("div")
            .contains("p", errorMessage)
            .should("be.visible")
            .and("have.class", "text-red-500");
    });

    it("6. Shouldn't show the error message", () => {
        mount(<FormInput {...INPUT_OPTIONS} />);

        cy.get('p[class*="text-red-500"]').should("not.exist");
    });
});
