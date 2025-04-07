class StatusPage{
    clickStatusLink(){
        cy.contains("Status Codes").click();
    }
}
export default new StatusPage();