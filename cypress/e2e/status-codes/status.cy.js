import StatusPage from "./status.page";

describe("Status Test", () => {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/");
    StatusPage.clickStatusLink();
  });
  it("should display the status code page", () => {
    cy.url().should("include", "/status_codes");
  });
});
