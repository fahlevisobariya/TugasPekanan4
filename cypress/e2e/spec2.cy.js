describe("Search for query", () => {
  it('finds the content "login"', () => {
    cy.visit("https://www.saucedemo.com");

    cy.get("#user-name").type("standard_user");

    cy.get("#password").type("secret_sauce");

    cy.contains("Login").click();

    cy.get("#add-to-cart-sauce-labs-backpack").click();

    cy.get("#add-to-cart-sauce-labs-bike-light").click();

    cy.get("#add-to-cart-sauce-labs-bolt-t-shirt").click();
  });
});
