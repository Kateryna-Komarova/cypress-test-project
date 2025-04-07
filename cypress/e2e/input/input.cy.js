import InputPage from "./input.page";

describe("Input Test", () => {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/");
    InputPage.clickInputLink();
  });

  it("enters a number", () => {
    InputPage.enterNumber("2");
    InputPage.assertInputValue("2");
  });

  it("clears the input field", () => {
    InputPage.enterNumber("2");
    InputPage.clearInputField();
    InputPage.assertInputValue("");
  });
});
