describe("Test components on this page",()=>{
  beforeEach(()=>{
    cy.login("string:en","superman","Admin123","Nextgen Academy")
    cy.dashboard();
  })
  it("checks if the Registration button is clickable and  fucntional",()=>{
    cy.wait(40000)
    cy.get('.icon-bahmni-program').click()
    cy.wait(50000)
    })
  })