// cypress 9 code to test the todo app
//
/// <reference types="cypress" />

describe("to-do app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("Focus on the input", () => {
    cy.focused().should("have.class", "input");
  });

  // test whether the input field is empty
  it("Accepts input", () => {
    const newItem = "";

  
    cy.get('[ data-input="todo-input"]').type(`${newItem}{enter}`);

    cy.get(`[data-button="Add-Todo"]`).click();

    cy.get(".Toastify>div").should("have.text","Please enter a todo");

  });
});
