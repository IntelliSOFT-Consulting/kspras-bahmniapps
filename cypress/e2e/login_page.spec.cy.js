describe(`The user is able to see the labels and controls including text-boxes, buttons and labels on the Login Page and can interacted with.`, () => {
  beforeEach(() => {
    cy.visit("https://testkspras.intellisoftkenya.com/bahmni/home/index.html#/login")

  });

   it("test1-checks that the user can't  log in with wrong credentials",()=>{
      cy.get("#locale").select("string:en")
      cy.get("#username").type("User123")
      cy.get("#password").type("Admin123")
      cy.get("#location").select("Moi Teaching And Referral Hospital")
      cy.get('form.ng-dirty > .login-body > .form-footer > .confirm').click()
      cy.get('.ng-submitted > .login-body > .note-container > .note > .text')
      cy.wait(1000)
    })
    
    it("test2- correct login credentials logging into the application and changing language for Italiano language",()=>{
      cy.get("#locale").select("string:it")
      cy.get("#username").type("User")
      cy.get("#password").type("Userone@123")
      cy.get("#location").select("Kenyatta National Hospital")
      cy.get('form.ng-dirty > .login-body > .form-footer > .confirm').click()
      cy.get('.ng-submitted > .login-body > .note-container > .note > .text')
  })

    it("test3- correct login credentials logging into the application",()=>{
      cy.get("#locale").select("string:en")
      cy.get("#username").type("User")
      cy.get("#password").type("User1@123")
      cy.get("#location").select("Kenyatta National Hospital")
      cy.get('form.ng-dirty > .login-body > .form-footer > .confirm').click()
      cy.get('.ng-submitted > .login-body > .note-container > .note > .text')
    })
  })