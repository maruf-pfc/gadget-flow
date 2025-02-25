describe("Go to Home", () => {
  it("should render home page", () => {
    cy.visit("/");
    cy.get("h1").should("have.text", "home");
    cy.get("img").should("have.attr", "alt", "Gadget Flow Online Shop Logo");
  });
});
