/// <reference types="cypress" />
/*global someFunction, cy*/
/*eslint no-undef: "error"*/

describe("Testeamos la gestión de usuarios", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Se renderiza correctamente", () => {
    cy.contains("FireShopping v1.0");
  });
});
