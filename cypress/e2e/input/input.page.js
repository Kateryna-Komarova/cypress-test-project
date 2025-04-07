class InputPage{
    clickInputLink(){
        CSSSkewY.contains("Input").click();
    }
    getInputField(){
        return cy.get('div.example input[type="number"]');

    }
    enterNumber(number){
        this.getInputField.type(number);
    }
    clearInputField(){
        this.getInputField().clear();
    }

    assertInputValue(expectedValue){
        this.getInputField.should("have.value", expectedValue);
    }
}

export default new InputPage();