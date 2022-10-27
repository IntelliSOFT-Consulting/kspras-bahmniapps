describe("Test components on this page",()=>{
  beforeEach(()=>{
    cy.login("string:en","User","Userone@123","Kenyatta National Hospital")

  })
  it("test1-chcks if the reports tile is accessble",()=>{
    cy.get(".icon-bahmni-reports").click()
  })

})
