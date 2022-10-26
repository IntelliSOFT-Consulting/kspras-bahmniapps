describe("Test components on this page",()=>{
  beforeEach(()=>{
    cy.login("string:en","User","Userone@123","Kenyatta National Hospital")

  })
  
  it("test1-  tests if the clinical tile is clickable",()=>{
  
  
    cy.get('.fa-user').click()

  })
  it("test2-tests if all elements in the client registration form can be filled to enable registration",()=>{
  
    cy.get('.fa-user').click()

   
   cy.get('.top-nav > :nth-child(3) > a > .nav-link').click()
    cy.get("#givenName")
    .should("be.visible")
    .type("Javan")

    cy.get("#middleName")
    .should("be.visible")
    .type("Ochieng")

    cy.get("#familyName")
    .should("be.visible")
    .type("Ayoma")

    cy.get("#gender")
    .should("be.visible")
    .select("Male")

    cy.get("#ageYears")
    .should("be.visible")
    .type("26")
    cy.get("#ageMonths")
    .should("be.visible")
    .type("6")

    cy.get("#ageDays")
    .should("be.visible")
    .type("13")

    cy.get('[address-fields=""] > :nth-child(1) > :nth-child(1) > .field-value > .ng-pristine')
    .should("be.visible")
    .type("Lake Turkana")

    cy.get("#cityVillage")
    .should("be.visible")
    .type("Bahati")

    cy.get("#stateProvince")
    .should("be.visible")
    .type("Nakuru")
    
    cy.get("#address2")
    .should("be.visible")
    .type("Nakuru")

    cy.get("#address1")
    .should("be.visible")
    .type("Bahati")

    cy.get("#country")
    .should("be.visible")
    .type("Kenya")

    cy.get("#occupation")
    .should("be.visible")
    .select("Student")

    cy.get("#idNumber")
    .should("be.visible")
    .type("23789019")

    cy.get("#phoneNumber")
    .should("be.visible")
    .type("0797226718")

    cy.get("#nextOfKinsName")
    .should("be.visible")
    .type("Jared Nziokii")

    cy.get("#patEducationDetails")
    .should("be.visible")
    .select("Uneducated")

    cy.wait(5000)
    cy.get('strong > a').click()
    cy.get("#email")
    .should("be.visible")
    .type("jayoma@intellisoftkenya.com")
    cy.get('.submit-btn').click()
    cy.wait(1000)
    cy.get('.toggle-button').select("Start IPD visit").click()

  })
  
  it("test3-searching for a patient by name ",()=>{
   
    cy.get('.fa-user').click()
    cy.wait(500)
    cy.get(':nth-child(2) > a').click()

    cy.get('#name')
    .should("be.visible")
    .type("John Doe")

    cy.get(':nth-child(4) > .reg-srch-btn > button').click()
 
  })
  
  it("test4-searches a patient by name then views their details",()=>{
      
    cy.get('.fa-user').click()
    cy.wait(500)
    cy.get(':nth-child(2) > a').click()

    cy.get('#name')
    .should("be.visible")
    .type("John Doe")

    cy.get(':nth-child(4) > .reg-srch-btn > button').click()

    cy.get('tr > :nth-child(1) > a').click({enter:true})
    
  })
  
  it("test5-Searching a client by ID",()=>{
   
    cy.get('.fa-user').click()
    cy.wait(5000)

    cy.get("#registrationNumber")
    .should("be.visible")
    .type("KSP314110")

    cy.get('.search-patient-id > .reg-srch-btn > button').click()
    
    cy.wait(5000)
  
 
  })
    it("test6-Returns to home page after searching for a patient's details",()=>{
      cy.get('.fa-user').click()
      cy.wait(500)
      cy.get(':nth-child(2) > a').click()
  
      cy.get('#name')
      .should("be.visible")
      .type("John Doe")
  
      cy.get(':nth-child(4) > .reg-srch-btn > button').click()

      cy.get('.back-btn > .fa').click()
    })
       it("test7-Initiates a visit for a client then goes back to the patient details form",()=>{
      cy.get('.fa-user').click()
      cy.wait(500)
      cy.get(':nth-child(2) > a').click()
  
      cy.get('#name')
      .should("be.visible")
      .type("John Doe")
  
      cy.get(':nth-child(4) > .reg-srch-btn > button').click()
      cy.get('tr > :nth-child(1) > a').click()
      cy.get('span > .right').click()
      
      cy.get("#observation_1")
      .type("170")
      .should("be.visible")

      cy.get("#observation_2")
      .type("60")

      cy.get(':nth-child(2) > .grid-row-element').click()

      cy.get(':nth-child(2) > .grid-row-element').click()

      cy.wait(3000)


     
    })
    it("test8-Initiates a visit for a client,selects bank payment then saves the form",()=>{
      cy.get('.fa-user').click()
      cy.wait(500)
      cy.get(':nth-child(2) > a').click()
  
      cy.get('#name')
      .should("be.visible")
      .type("John Doe")
  
      cy.get(':nth-child(4) > .reg-srch-btn > button').click()
      cy.get('tr > :nth-child(1) > a').click()
      cy.get('span > .right').click()
      
      cy.get("#observation_1")
      .type("170")
      .should("be.visible")

      cy.get("#observation_2")
      .type("60")

      cy.get(':nth-child(3) > .grid-row-element').click()

      cy.get('.confirm').click()
     
    })
it("test9-Initiates a consultation",()=>{
      cy.get('.fa-user').click()
      cy.wait(500)
      cy.get(':nth-child(2) > a').click()
  
      cy.get('#name')
      .should("be.visible")
      .type("John Doe")
  
      cy.get(':nth-child(4) > .reg-srch-btn > button').click()
      cy.get('tr > :nth-child(1) > a').click()
      cy.get('span > .right').click()
      
  
      cy.get("#observation_1")
      .type("160")
      .should("be.visible")
      

      cy.get("#observation_2")
      .type("60")

      cy.get(':nth-child(3) > .grid-row-element').click()

      cy.get('.confirm').click()

      cy.wait(18000)

      cy.get("#obervation_4").type("Headache")

      cy.get('.btn--left').click()

      

      cy.get('.small-btn').click()

      cy.get("#obervation_5").type("First time occurence")

      cy.get("#obervation_6").type("Never experienced before")

      cy.get("#obervation_7").type(" Should be monitored")
    })
    it("test10-Accessing the medication tab",()=>{

      cy.get('.fa-user').click()
      cy.wait(500)
      cy.get(':nth-child(2) > a').click()
  
      cy.get('#name')
      .should("be.visible")
      .type("John Doe")
  
      cy.get(':nth-child(4) > .reg-srch-btn > button').click()
      cy.get('tr > :nth-child(1) > a').click()
      cy.wait(3000)
      cy.get('span > .right').click()
      cy.get('#observation_1').type("Headache")
      cy.get("#observation_2").type("")

      cy.get('.confirm').click()
     
   
