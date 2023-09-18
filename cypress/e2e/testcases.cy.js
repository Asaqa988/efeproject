/// <reference types= "cypress" />
Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});
describe("Aspire Test cases ", () => {
  it("Randomly enter the website arabic or english ", () => {
    let Websites = [
      "https://global.almosafer.com/ar",
      "https://global.almosafer.com/en",
    ];

    let RandomIndex = Math.floor(Math.random() * Websites.length);
    cy.visit(Websites[RandomIndex]);

    let ArabicCities = ["جدة","دبي"]
    let ArabicRandomIndex = Math.floor(Math.random()*ArabicCities.length)
    let englishCities = ["riyadh","dubai","jeddah"]
    let EnglishRandomIndex =Math.floor(Math.random()*englishCities.length)

    cy.get(".cta__saudi").click();
    cy.get("#uncontrolled-tab-example-tab-hotels").click();
    if (RandomIndex == 0) {
      cy.get('[data-testid="AutoCompleteInput"]').type(ArabicCities[ArabicRandomIndex])
    }else {
      cy.get('[data-testid="AutoCompleteInput"]').type(englishCities[EnglishRandomIndex])

    }
  });
});
