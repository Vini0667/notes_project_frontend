import GoogleSignInButton from "../../../../src/components/Utilities/GoogleLoginButton";
import { mount } from "@cypress/react";
import "../../../../src/index.css";

describe("Testing the GoogleLogin button", () => {
    it("1. Should be visible", () => {
        mount(<GoogleSignInButton />);

        cy.get("button").should("be.visible");
    });

    it("2. Should change color when is on dark mode", () => {
        cy.window().then((win) => {
            win.document.documentElement.classList.add("dark");
        });

        mount(<GoogleSignInButton />);

        cy.get("button").should("be.visible");
        cy.get("button")
            .should("have.class", "dark:bg-gray-900")
            .and("have.class", "dark:text-white");
    });
});
