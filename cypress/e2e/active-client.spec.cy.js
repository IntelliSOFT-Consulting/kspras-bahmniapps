describe("Test components on this page",()=>{
  beforeEach(()=>{
    cy.login("string:en","User","Userone@123","Kenyatta National Hospital")

  })
  it("test1-checks that the patient queue button is clickable",()=>{
    cy.get(".fa-stethoscope")
    .click()
    .should("be.visible")

    cy.get("#patientIdentifier")
    .type("John Doe{enter}")

    cy.wait(500)
    


  })
})
