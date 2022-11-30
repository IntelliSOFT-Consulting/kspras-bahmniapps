describe("Test components on this page",()=>{
  beforeEach(()=>{
    cy.login("string:en","User","Userone@123","Kenyatta National Hospital")

  })
  it("test1-checks if the reports tile is accessble",()=>{
    cy.get(".icon-bahmni-reports").click()
  })
  it("test2-checks if the test forms reports tile is accessble",()=>{
    cy.get(".icon-bahmni-reports").click()
  

    cy.get("[type='date']").eq(2).type("2022-01-01")
    cy.get("[type='date']").eq(3).type("2022-10-27")

    cy.get('tbody > :nth-child(1) > .reports-format > .ng-pristine').select("PDF")
    cy.get(':nth-child(1) > .reports-action > [ng-click="downloadReport(report)"]').click()

  })
  it("test3-checks if the chief complaint reports tile is accessble",()=>{
    cy.get(".icon-bahmni-reports").click()
  

    cy.get("[type='date']").eq(4).type("2022-01-01")
    cy.get("[type='date']").eq(5).type("2022-10-27")

    cy.get('tbody > :nth-child(2) > .reports-format > .ng-pristine').select("CSV")

    cy.get(':nth-child(2) > .reports-action > [ng-click="downloadReport(report)"]').click()

  })

  it.only("test3-checks if the Outpatient mobidity reports tile is accessble",()=>{
    cy.get(".icon-bahmni-reports").click()
  

    cy.get("[type='date']").eq(8).type("2022-01-01")
    cy.get("[type='date']").eq(9).type("2022-10-27")

    cy.get('tbody > :nth-child(5) > .reports-format > .ng-pristine').select("CSV")

    cy.get(':nth-child(4) > .reports-action > [ng-click="downloadReport(report)"]').click()

  })
})